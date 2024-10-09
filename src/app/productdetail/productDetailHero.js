import React from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiStar, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const ProductDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">Home</a> / 
        <a href="/development" className="hover:underline"> Development Tools</a> / 
        <span className="text-black"> CodeCraft Pro</span>
      </nav>

      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-12">
        {/* Left: Product Image */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/ball.png" // Replace with the actual path of the product image
            alt="CodeCraft Pro"
            layout="responsive"
            width={800}
            height={800}
            className="rounded-lg"
          />
          {/* Arrows for navigating between product images */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-4">
            <button className="bg-white rounded-full p-2 shadow-lg">
              <FiArrowLeft className="text-gray-700" />
            </button>
            <button className="bg-white rounded-full p-2 shadow-lg">
              <FiArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-black">CodeCraft Pro</h1>
          <p className="text-gray-500">
            Ready for 3D print. Ready to make on CNC Machine. No undercuts. Minimum angle it takes is 60 degrees to surface.
          </p>
          <p className="text-gray-500">
            The size of the model is 67×90×25 (mm). Easy to scale.
          </p>

          {/* Price and Rating */}
          <div className="text-3xl font-semibold text-orange-600">$14.99</div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {Array(5).fill().map((_, i) => (
                <FiStar key={i} className="text-yellow-700" />
              ))}
            </div>
            <span className="text-gray-500">(132 Reviews)</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
              <FiShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
