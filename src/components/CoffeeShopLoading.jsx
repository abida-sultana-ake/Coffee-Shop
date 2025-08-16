import React from "react";
import { FaCoffee } from "react-icons/fa";

const CoffeeShopLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="flex flex-col items-center space-y-4">
        <FaCoffee className="text-amber-700 text-6xl animate-spin-slow" />
        <p className="text-amber-700 text-lg font-semibold">
          Brewing your Coffee Haven...
        </p>
      </div>

      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CoffeeShopLoading;
