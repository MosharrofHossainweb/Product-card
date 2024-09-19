import  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ProductData } from '../Slice/ProductSlice';

const Product = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
// ==================getting dada from API=========
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea8189acd3cb34a8869ffe')
      .then(response => response.json())
      .then(json => setData(json.record))  // Update the state with fetched data
      .catch(error => console.error('Error fetching data:', error));
  }, []);
// =====================functionality======================
  const handelProduct = (perameter)=>{
      console.log(perameter)
      navigate('/ProductDetail')
      dispatch(ProductData(perameter))
  }

  return (
    <>
      <div className="container">
        <div className="w-full h-full flex flex-wrap gap-10 p-5 bg-blue-600">
          {data.map((item) => (
            <div onClick={()=>handelProduct(item)}
              key={item.id}
              className="w-[330px] bg-blue-200 border border-gray-300 rounded-xl shadow-2xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 p-6"
            >
              <img
                className="w-full h-56 object-cover rounded-t-lg"
                src={item.photo} // Use dynamic photo from the data
                alt={item.model_number}
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-blue-700">ID: {item.id}</h2>
                <h2 className="text-lg font-bold text-blue-700">
                  {item.manufacturer_name} {item.model_number}
                </h2>
                <p className="text-blue-700 text-l">
                  Made in: <span className="font-medium">{item.made_by_country}</span>
                </p>
                <div className="flex justify-between mt-3">
                  <div className="text-sm text-gray-600">
                    <span className="font-bold">RAM:</span> {item.ram}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-bold">ROM:</span> {item.rom}
                  </div>
                </div>
                <div className="flex justify-between mt-3 items-center flex-wrap">
                  <p className="text-lg font-bold text-blue-500">Price: {item.price_in_bd} BDT</p>

                  <div className="button pt-5 pb-5 flex gap-5 w-full">
                    <button  className="bg-yellow-700 w-[130px] text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      See More
                    </button>
                    <button className="bg-yellow-700 w-[130px] text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
