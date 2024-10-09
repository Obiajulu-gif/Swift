"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const router = useRouter();

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();

			if (res.ok) {
				localStorage.setItem("token", data.token); // Save JWT
				router.push("/dashboard");
			} else {
				setError(data.message || "Signup failed.");
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
		} finally {
			router.push("/dashboard");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
			<div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
				<div className="flex justify-center mb-6">
					<Image
						src="/images/logo.png"
						alt="Project Logo"
						width={60}
						height={60}
						className="rounded-full animation-pulse"
					/>
				</div>
				<h2 className="text-3xl font-semibold mb-6 text-center text-orange-500 ">
					Sign Up
				</h2>
				{error && <p className="text-red-500 mb-4 text-center">{error}</p>}
				<form onSubmit={handleSignUp} className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 border rounded focus:border-orange-500 outline-none text-black"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 border rounded focus:border-orange-500 outline-none text-black"
						required
					/>
					<button
						type="submit"
						className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
					>
						Sign Up
					</button>
				</form>
				<p className="text-center mt-4">
					Already have an account?{" "}
					<a href="/auth/signin" className="text-orange-500 hover:underline">
						Sign In
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUpPage;
