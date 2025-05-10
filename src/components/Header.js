import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-yellow-400 px-6 py-4 shadow-md sticky top-0 z-10">
            <div className="flex items-center">
                <img
                    className="w-[140px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                    src={LOGO_URL}
                    alt="App Logo"
                />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="lg:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="text-gray-900 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`font-extrabold ${isMenuOpen ? "block" : "hidden"} lg:block`}>
                <ul className="flex gap-6 items-center flex-wrap text-gray-900 text-lg">
                    <li>
                        <Link to="/" className="hover:text-orange-700 transition-colors duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-orange-700 transition-colors duration-300">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-orange-700 transition-colors duration-300">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/Grocery" className="hover:text-orange-700 transition-colors duration-300">
                            Grocery
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link 
                            to="/cart" 
                            className="hover:text-orange-700 transition-colors duration-300 flex items-center gap-2 px-3 py-2 rounded-lg group-hover:bg-yellow-500"
                        >
                            <div className="relative">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                                    />
                                </svg>
                                {totalCartItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        {totalCartItems}
                                    </span>
                                )}
                            </div>
                            <span className="hidden md:inline-block">Cart</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-md"
                            onClick={() =>
                                setBtnNameReact((prev) =>
                                    prev === "Login" ? "Logout" : "Login"
                                )
                            }
                        >
                            {btnNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
