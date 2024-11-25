"use client";
import React from "react";

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 text-white">
      <div className="w-[90%] mx-auto lg:w-[350px] md:w-[500px] lg:mx-auto md:mx-auto rounded-xl shadow-lg bg-opacity-50 backdrop-blur-md bg-blue-800/60 p-6 ml-5">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-6 bg-gray-300 mt-4 rounded-md w-3/4 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-300 mt-2 rounded-md w-1/2 mx-auto animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="h-10 bg-gray-300 rounded-md w-full animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded-md w-full animate-pulse"></div>
          <div className="h-12 bg-gray-300 rounded-md w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
