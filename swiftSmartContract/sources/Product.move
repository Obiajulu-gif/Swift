module Swiftsmartcontract::Product {

    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use sui::transfer::{Self, Transfer};
    use sui::balance::{Self, Balance};
    use sui::coin::{Self, Coin};

    /// Represents a product, similar to an NFT
    struct Product has key, store {
        id: UID,
        name: vector<u8>,
        description: vector<u8>,
        price: u64,
        owner: address
    }

    /// Mint a new product and list it for sale
    public fun mint_product(
        name: vector<u8>, 
        description: vector<u8>, 
        price: u64, 
        ctx: &mut TxContext
    ): Product {
        let id = object::new(ctx);
        Product { id, name, description, price, owner: tx_context::sender(ctx) }
    }

    /// Function to list a product for sale
    public fun list_product(product: &Product): bool {
        // Implementation to add product to marketplace listings
        // This could involve storing it in a global object
        // Here we'll assume this function adds it to a marketplace.
        true
    }

    /// Get product details (used for querying info)
    public fun get_product_details(product: &Product): (vector<u8>, vector<u8>, u64, address) {
        (product.name, product.description, product.price, product.owner)
    }
}
