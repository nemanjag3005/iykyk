import React from "react";

const Landing = () => {
  return (
    <div className="dark:bg-black bg-gray-50">
      <div className="max-w-7xl mx-auto py-48">
        <div>
          <h1 className="text-6xl dark:text-gray-200 text-gray-900 font-bold">
            NE TRAŽI IZGOVORE.
          </h1>
          <h1 className="text-6xl dark:text-gray-200 text-gray-900 font-bold">
            POBEDI SEBE.
          </h1>
        </div>
        <button className="rounded-full py-4 px-6 text-lg mt-12 bg-blue-600">
          Pogledaj Ponudu
        </button>
      </div>
    </div>
  );
};

export default Landing;
