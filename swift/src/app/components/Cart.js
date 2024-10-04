"use client"; // Add this to ensure the component is rendered on the client-side

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";

const Cart = ({ onClose }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCart(savedCart);
	}, []);

	const removeFromCart = (productId) => {
		const updatedCart = cart.filter((item) => item.id !== productId);
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		window.dispatchEvent(new Event("storage"));
	};

	const cartTotal = cart.reduce(
		(total, item) => total + parseFloat(item.price),
		0
	);

	return (
		<div className="w-full max-w-md p-4 bg-white rounded shadow-lg fixed top-0 right-0 h-screen overflow-y-auto z-50">
			<button
				onClick={onClose}
				className="absolute top-4 right-4 text-black text-2xl"
			>
				X
			</button>
			<h2 className="text-xl font-bold mb-4">My Cart</h2>
			<div>
				{cart.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					cart.map((item) => (
						<div
							key={item.id}
							className="flex justify-between items-center mb-4"
						>
							<div className="flex items-center">
								<div className="w-16 h-16 relative">
									<Image
										src={item.image}
										alt={item.name}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-bold">{item.name}</h3>
									<p className="text-gray-500">{item.price}</p>
								</div>
							</div>
							<button
								onClick={() => removeFromCart(item.id)}
								className="text-red-500 hover:text-red-700"
							>
								<FiTrash size={20} />
							</button>
						</div>
					))
				)}
			</div>
			<div className="text-right font-bold">
				Subtotal: ${cartTotal.toFixed(2)}
			</div>
			<button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
				Checkout
			</button>
		</div>
	);
};

export default Cart;
