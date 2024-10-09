import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SigninModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async (e) => {
        e.preventDefault();
        await signIn('credentials', { redirect: false, email, password });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Sign In</h2>
                <form onSubmit={handleSignin}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default SigninModal;
