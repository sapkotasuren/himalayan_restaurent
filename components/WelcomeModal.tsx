'use client';

import React, { useEffect } from "react";

const WelcomeModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Himalayan Restaurant!</h2>
        <p className="text-center text-gray-600">
          Enjoy authentic Indian & Nepalese cuisine, crafted with love and care.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-amber-400 text-black font-medium rounded hover:bg-amber-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
