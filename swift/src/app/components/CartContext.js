"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Cart provider that wraps the app
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	const removeFromCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId));
	};

	const cartTotal = cart.reduce(
		(total, item) => total + parseFloat(item.price),
		0
	);

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, cartTotal }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
};
