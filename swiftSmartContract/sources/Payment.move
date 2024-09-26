module Swiftsmartcontract::Payment {

    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::tx_context::TxContext;
    use sui::transfer::{Self, Transfer};
    use Swiftsmartcontract::ProductTransfer;
    use Swiftsmartcontract::Product;

    /// Handle payment and product transfer
    public fun purchase_product(
        product: Product::Product, 
        payment_coin: Coin<SUI>, 
        ctx: &mut TxContext
    ) {
        // Ensure correct payment (compare payment amount with product price)
        let price = product.price;
        let payment_amount = Coin::value(payment_coin);
        assert!(payment_amount >= price, 1); // Ensure payment meets product price
        
        // Transfer the product to buyer
        let buyer = tx_context::sender(ctx);
        let updated_product = ProductTransfer::transfer_product(product, buyer, ctx);

        // Transfer the payment to the seller
        let seller = updated_product.owner;
        Transfer::transfer(payment_coin, seller);
    }
}
