import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary bg-indigo-600 border-none hover:bg-indigo-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
