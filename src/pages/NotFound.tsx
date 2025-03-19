
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-steelblue mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-steelblue text-white rounded-md transition-all duration-300 hover:bg-opacity-90"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
