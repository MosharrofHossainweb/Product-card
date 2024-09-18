import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  // Fetch data from Redux store
  const sliceData = useSelector((state) => state.counter.value);

  return (
    <div className="container mx-auto p-5">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        {/* Product Image */}
        <img
          className="w-full h-96 object-cover rounded-lg mb-6 shadow-md"
          src={sliceData?.photo || 'https://via.placeholder.com/600'} // Fallback image URL
          alt={sliceData?.model_number || 'Product Name'}
        />

        {/* Product Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            {sliceData?.manufacturer_name || 'Manufacturer Name'} {sliceData?.model_number || 'Model Number'}
          </h1>
          <p className="text-xl text-gray-600">
            Made in: <span className="font-medium text-gray-800">{sliceData?.made_by_country || 'Country Name'}</span>
          </p>
        </div>

        {/* Product Specifications */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-lg text-gray-700">
              <span className="font-bold">RAM:</span> {sliceData?.ram || '12GB'}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-bold">ROM:</span> {sliceData?.rom || '256GB'}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-bold">Display:</span> {sliceData?.display || '6.7 inches'}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-bold">Camera:</span> {sliceData?.camera || '48MP Triple'}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-bold">Battery:</span> {sliceData?.battery || '5000mAh'}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-bold">Processor:</span> {sliceData?.processor || 'Octa-Core'}
            </div>
          </div>
        </div>

        {/* Product Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold text-blue-600">
            Price: <span className="text-gray-800">{sliceData?.price_in_bd || '150000 BDT'}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
          <button className="bg-gray-600 text-white text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
