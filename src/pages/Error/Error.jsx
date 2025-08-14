import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-900 mb-4">
          404
        </h1>
        <p className="text-lg sm:text-xl text-yellow-800 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
