// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3A3A3A] text-gray-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo & App Download CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="flex items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps9FV9h4ZSxrPV3ChB-F_2FREt-cBPIl25Q&s" 
              alt="GrubHub Logo"
              className="w-40 h-auto"
            />
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-6 text-white">For the best experience, get the GrubHub app</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              {/* App Store Button */}
              <a href="#" className="bg-black hover:bg-gray-900 transition duration-300 rounded-xl px-6 py-3 flex items-center justify-center w-48">
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.373-1.683-.373-.535 0-1.113.124-1.735.373-.623.25-1.13.381-1.522.394-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.425.747.283 1.227.425 1.436.425.158 0 .689-.167 1.593-.498.853-.309 1.573-.437 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.013 1.213.453 2.222 1.317 3.025.844.782 1.862 1.172 3.053 1.176-.024.305-.074.596-.152.874zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.89 1.103-2.688.352-.404.8-.741 1.343-1.009.543-.264 1.06-.416 1.547-.455.01.128.016.255.016.381z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              {/* Google Play Button - Updated with correct icon */}
              <a href="#" className="bg-black hover:bg-gray-900 transition duration-300 rounded-xl px-6 py-3 flex items-center justify-center w-48">
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">GrubHub Corporate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">GrubHub+</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">GrubHub Dine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">GrubHub Express</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">GrubHub Genie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Help & Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Partner with us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Ride with us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition hover:underline">Investor Relations</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Available in</h4>
            <div className="grid grid-cols-2 gap-3">
              <span className="text-gray-300 hover:text-white transition cursor-pointer">New York</span>
              <span className="text-gray-300 hover:text-white transition cursor-pointer">Chicago</span>
              <span className="text-gray-300 hover:text-white transition cursor-pointer">Los Angeles</span>
              <span className="text-gray-300 hover:text-white transition cursor-pointer">Houston</span>
              <span className="text-gray-300 hover:text-white transition cursor-pointer">Phoenix</span>
              <span className="text-gray-300 hover:text-white transition cursor-pointer">500+ cities</span>
            </div>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 GrubHub Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;