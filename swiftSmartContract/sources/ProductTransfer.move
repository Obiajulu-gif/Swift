module Swiftsmartcontract::ProductTransfer {

    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use sui::transfer::{Self, Transfer};
    use Swiftsmartcontract::Product;

    /// Transfer ownership of a product upon purchase
    public fun transfer_product(
        product: Product::Product, 
        new_owner: address, 
        ctx: &mut TxContext
    ): Product::Product {
        assert!(product.owner == tx_context::sender(ctx), 0); // Only owner can transfer
        Transfer::transfer(product.id, new_owner); // Transfer ownership on-chain
        Product::Product {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            owner: new_owner,
        }
    }
}
