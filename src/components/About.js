const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 mb-6">
          <img
            src="https://img.icons8.com/emoji/48/hamburger-emoji.png"
            alt="Food Icon"
            className="w-10 h-10"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            About Swiggy Clone
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10">
          Welcome to <span className="text-orange-600 font-semibold">Swiggy Clone</span> — a modern food delivery web application inspired by Swiggy, designed with cutting-edge technologies to offer a smooth, responsive, and intuitive user experience. Explore menus, order from your favorite restaurants, and enjoy fast delivery, just like a real-world app.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-left border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🚀 Tech Stack Overview
          </h2>
          <ul className="grid gap-4 text-gray-800 text-base sm:grid-cols-2">
            <li>
              <strong>Frontend:</strong> React.js + Tailwind CSS
            </li>
            <li>
              <strong>Routing:</strong> React Router DOM
            </li>
            <li>
              <strong>State Management:</strong> useState, useEffect, useContext
            </li>
            <li>
              <strong>Rendering:</strong> Reusable Components & Hooks
            </li>
            <li>
              <strong>API Integration:</strong> Swiggy public APIs / Mock Data
            </li>
            <li>
              <strong>UX Features:</strong> Responsive Layout, Fast Navigation
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Proudly <span className="font-medium">designed & developed</span> by{" "}
            <span className="font-bold text-black">Vikash Sengar 💜</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
