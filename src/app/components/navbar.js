// Navbar.js
"use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Cart from "./Cart";
// import SignupModal from "./SignupModal";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
//   const [cartCount, setCartCount] = useState(0); // State for cart count
//   const [isCartOpen, setIsCartOpen] = useState(false); // State for cart visibility
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // State for signup modal
//   const { data: session } = useSession();

//   useEffect(() => {
//     // Load the cart count from localStorage
//     const loadCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartCount(cart.length);
//     };

//     loadCartCount();
//     window.addEventListener("storage", loadCartCount);

//     return () => window.removeEventListener("storage", loadCartCount);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleCart = () => setIsCartOpen(!isCartOpen);
//   const openSignupModal = () => setIsSignupModalOpen(true);
//   const closeSignupModal = () => setIsSignupModalOpen(false);

//   return (
//     <nav className="bg-black text-white p-4">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center cursor-pointer animate-pulse">
//           <Image src="/images/logo.png" alt="Swift Logo" width={40} height={40} />
//           <span className="ml-3 text-xl font-semibold">Swift</span>
//         </Link>

//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6 ml-auto">
//           <Link href="/development" className="hover:text-blue-500">Development Tools</Link>
//           <Link href="/productdetail" className="hover:text-blue-500">Product</Link>
//           <Link href="#footer" className="hover:text-blue-500">Contact Us</Link>
//           <Link href="#faq" className="hover:text-blue-500">Help</Link>
//           <div onClick={toggleCart} className="relative cursor-pointer">
//             <FiShoppingCart size={40} />
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>
          
//           {session ? (
//             <div>
//               <span className="mr-4">{session.user.email}</span>
//               <button onClick={() => signOut()} className="bg-blue-500 py-2 px-4 rounded-lg">Logout</button>
//             </div>
//           ) : (
//             <>
//               <button onClick={() => signIn()} className="bg-blue-500 py-2 px-4 rounded-lg mr-2">
//                 Sign In
//               </button>
//               <button onClick={openSignupModal} className="bg-green-500 py-2 px-4 rounded-lg">
//                 Sign Up
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="bg-black text-white space-y-4 p-4 flex flex-col items-start">
//             <Link href="/development" className="hover:text-blue-500 w-full text-left">Development Tools</Link>
//             <Link href="/productdetail" className="hover:text-blue-500 w-full text-left">Product</Link>
//             <Link href="#footer" className="hover:text-blue-500 w-full text-left">Contact Us</Link>
//             <Link href="#faq" className="hover:text-blue-500 w-full text-left">Help</Link>
//             <button onClick={() => signIn()} className="bg-blue-500 py-2 px-4 rounded-lg w-full">
//               Sign In
//             </button>
//             <button onClick={openSignupModal} className="bg-green-500 py-2 px-4 rounded-lg w-full">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       )}

//       {isCartOpen && <Cart onClose={toggleCart} />}
//       <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import Cart from "./Cart";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { data: session } = useSession();

	useEffect(() => {
		const loadCartCount = () => {
			const cart = JSON.parse(localStorage.getItem("cart")) || [];
			setCartCount(cart.length);
		};
		loadCartCount();
		window.addEventListener("storage", loadCartCount);

		return () => window.removeEventListener("storage", loadCartCount);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);
	const toggleCart = () => setIsCartOpen(!isCartOpen);

	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link
					href="/"
					className="flex items-center cursor-pointer animate-pulse"
				>
					<Image
						src="/images/logo.png"
						alt="Swift Logo"
						width={40}
						height={40}
					/>
					<span className="ml-3 text-xl font-semibold">Swift</span>
				</Link>

				<div className="lg:hidden">
					<button onClick={toggleMenu} className="text-white">
						{isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center space-x-6 ml-auto">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<Link href="/productdetail" className="hover:text-blue-500">
						Product
					</Link>
					<Link href="#footer" className="hover:text-blue-500">
						Contact Us
					</Link>
					<Link href="#faq" className="hover:text-blue-500">
						Help
					</Link>
					<div onClick={toggleCart} className="relative cursor-pointer">
						<FiShoppingCart size={40} />
						{cartCount > 0 && (
							<span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
								{cartCount}
							</span>
						)}
					</div>
					{session ? (
						<div>
							<span className="mr-4">{session.user.email}</span>
							<button
								onClick={() => signOut()}
								className="bg-blue-500 py-2 px-4 rounded-lg"
							>
								Logout
							</button>
						</div>
					) : (
						<>
							<Link href="/auth/signin">
								<button className="bg-blue-500 py-2 px-4 rounded-lg mr-2">
									Sign In
								</button>
							</Link>
							<Link href="/auth/signup">
								<button className="bg-green-500 py-2 px-4 rounded-lg">
									Sign Up
								</button>
							</Link>
						</>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden">
					<div className="bg-black text-white space-y-4 p-4 flex flex-col items-start">
						<Link
							href="/development"
							className="hover:text-blue-500 w-full text-left"
						>
							Development Tools
						</Link>
						<Link
							href="/productdetail"
							className="hover:text-blue-500 w-full text-left"
						>
							Product
						</Link>
						<Link
							href="#footer"
							className="hover:text-blue-500 w-full text-left"
						>
							Contact Us
						</Link>
						<Link href="#faq" className="hover:text-blue-500 w-full text-left">
							Help
						</Link>
						<Link href="/auth/signin">
							<button className="bg-blue-500 py-2 px-4 rounded-lg w-full">
								Sign In
							</button>
						</Link>
						<Link href="/auth/signup">
							<button className="bg-green-500 py-2 px-4 rounded-lg w-full">
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			)}
			{isCartOpen && <Cart onClose={toggleCart} />}
		</nav>
	);
};

export default Navbar;
