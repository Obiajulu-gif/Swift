"use client";
import React, { useState } from "react";
import Image from "next/image";

const Settings = () => {
	const [firstName, setFirstName] = useState("Emmanuel");
	const [surname, setSurname] = useState("Okoye");
	const [email, setEmail] = useState("okoyeemmanuel998@gmail.com");
	const [profilePhoto, setProfilePhoto] = useState("/images/teamLead.png"); // Default profile photo

	// Handler for photo upload
	const handlePhotoUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePhoto(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	// Handler for form submission
	const handleSaveChanges = (e) => {
		e.preventDefault();
		alert("Profile details saved successfully.");
	};

	return (
		<div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6">
			{/* Sidebar */}
			<div className="w-full lg:w-1/4 bg-white p-4 border rounded-lg">
				<ul className="space-y-4">
					<li>
						<button className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full text-left">
							User Profile
						</button>
					</li>
					<li>
						<button className="text-gray-500 py-2 px-4 rounded-lg w-full text-left hover:text-orange-500">
							Notification
						</button>
					</li>
					<li>
						<button className="text-gray-500 py-2 px-4 rounded-lg w-full text-left hover:text-orange-500">
							Email
						</button>
					</li>
					<li>
						<button className="text-gray-500 py-2 px-4 rounded-lg w-full text-left hover:text-orange-500">
							Log Out
						</button>
					</li>
				</ul>
			</div>

			{/* Profile Update Form */}
			<div className="w-full lg:flex-1 bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold mb-6">User Profile</h2>

				{/* Profile Photo Section */}
				<div className="flex flex-col items-center mb-6">
					<Image
						src={profilePhoto}
						alt="Profile Photo"
						width={100}
						height={100}
						className="rounded-full mb-4"
					/>
					<label className="text-orange-500 cursor-pointer flex items-center space-x-2">
						<input
							type="file"
							accept="image/*"
							onChange={handlePhotoUpload}
							className="hidden"
						/>
						<span className="font-medium">Upload Photo</span>
					</label>
				</div>

				{/* Form for User Profile Details */}
				<form onSubmit={handleSaveChanges}>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{/* First Name Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								First Name
							</label>
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="mt-1 p-2 w-full border border-gray-300 rounded-md"
								required
							/>
						</div>

						{/* Surname Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Surname
							</label>
							<input
								type="text"
								value={surname}
								onChange={(e) => setSurname(e.target.value)}
								className="mt-1 p-2 w-full border border-gray-300 rounded-md"
								required
							/>
						</div>

						{/* Email Input */}
						<div className="sm:col-span-2">
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 p-2 w-full border border-gray-300 rounded-md"
								required
							/>
						</div>
					</div>

					{/* Form Buttons */}
					<div className="mt-6 flex space-x-4">
						<button
							type="button"
							className="py-2 px-4 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Settings;
