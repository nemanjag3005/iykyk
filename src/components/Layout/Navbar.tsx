import React from "react";

const Navbar = () => {
  return (
    <div className="sticky dark:bg-black bg-white w-full z-10 shadow-sm top-0 border-b border-gray-200 dark:border-gray-700 sm:px-6 px-2">
      <div className="container h-14 flex flex-nowrap max-w-7xl mx-auto justify-between items-center">
        <h1 className="dark:text-gray-100 text-gray-900 font-bold text-2xl italic">
          IYKYK
        </h1>
        <span className="dark:text-gray-100 text-gray-900">Shop</span>
      </div>
    </div>
  );
};

export default Navbar;
