/*import React from "react";
import { groceryItems } from "./groceryData";

const Grocery = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(price);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-10 tracking-wide">
        Fresh & Affordable Grocery Picks
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {groceryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out p-5 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
              className="w-24 h-24 object-cover rounded-lg mb-4 transition-transform duration-300"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{formatPrice(item.price)}</p>
            <button
              className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;*/
import React from "react";
import { groceryItems } from "./groceryData";

const Grocery = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(price);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Delivery Service Message */}
      <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-6 text-center font-semibold">
        Our grocery delivery service is temporarily unavailable, but we are working to start it soon. Stay tuned for updates!
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-10 tracking-wide">
        Fresh & Affordable Grocery Picks
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {groceryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out p-5 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
              className="w-24 h-24 object-cover rounded-lg mb-4 transition-transform duration-300"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{formatPrice(item.price)}</p>
            <button
              className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;

