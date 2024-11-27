// app/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#0a0b0d]">
      <div className="flex items-center">
        <svg
          aria-label="Coinbase logo"
          className="cds-iconStyles-iogjozt"
          height="32"
          role="img"
          viewBox="0 0 48 48"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Coinbase logo</title>
          <path
            d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div className="flex space-x-4">
        <button className="bg-transparent text-white font-semibold py-2 px-4  rounded-full hover:bg-gray-700 transition">
          Sign up
        </button>
        <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-600 transition">
          Sign in to Business
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
