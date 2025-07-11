import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-cyan-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/#hero"
          className="mt-6 inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-600 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
