import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="SwiftTeam Logo"
            className="h-10 w-10"
          />
          <span className="ml-3 text-xl font-semibold">Swift</span>
        </div>
        <div className="flex-1"></div> {/* Add flex-grow to push the following content to the right */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-500">
            Development Tools
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Help
          </a>
        </div>
        <div>
          <button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
