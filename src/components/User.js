import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1); // Optional: currently unused

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Count: {count}</h2>
      <h3 className="text-sm text-gray-500 mb-1">Location: Not Provided</h3>
      <h2 className="text-xl font-bold text-amber-700 mb-1">Name: {name}</h2>
      <h4 className="text-sm text-blue-600">Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
