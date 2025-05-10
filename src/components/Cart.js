import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItemQuantity, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price || item.defaultPrice || 0) * item.quantity,
      0
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between p-4 border rounded-lg shadow-sm"
              >
                <div className="flex-1 flex items-start gap-4">
                  {item.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      ₹{(item.price || item.defaultPrice || 0) / 100}
                    </p>
                    {item.itemAttribute?.vegClassifier && (
                      <span className="text-xs">
                        {item.itemAttribute.vegClassifier === "VEG" ? (
                          <span className="text-green-600">🟢 Veg</span>
                        ) : (
                          <span className="text-red-600">🔴 Non-Veg</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 border rounded-lg p-1">
                    <button
                      className="px-2 py-1 text-lg cursor-pointer"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-lg cursor-pointer"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Subtotal:</h3>
              <span className="text-xl font-bold">₹{calculateTotal() / 100}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg">Delivery Fee:</h3>
              <span className="text-lg">₹49</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold border-t pt-4 mb-6">
              <h3>Total:</h3>
              <span>₹{(calculateTotal() / 100) + 49}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;