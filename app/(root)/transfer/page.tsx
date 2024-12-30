"use client";

import FixedHeader from "@/components/FixedHeader";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute";

import React, { useState } from "react";

const Transfer = () => {
  const [amount, setAmount] = useState<number>(0);
  const [transferMethod, setTransferMethod] = useState<string>("Bank");
  const [fullName, setFullName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>("");
  const [showAccessCodeModal, setShowAccessCodeModal] =
    useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const winningsAmount = 5000; // Example winnings amount

  const handleTransfer = () => {
    // Log the form data to the console for debugging
    if (
      !fullName ||
      !contactNumber ||
      !email ||
      !amount ||
      (transferMethod === "Bank" && (!bankName || !accountNumber))
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Show confirmation modal
    setShowConfirmationModal(true);
  };

  const handleConfirmTransfer = () => {
    // Show access code modal after confirming the transfer
    setShowConfirmationModal(false);
    setShowAccessCodeModal(true);
  };

  const handleCancelTransfer = () => {
    // Hide the confirmation modal and reset the transfer status
    setShowConfirmationModal(false);
    
  };

  const handleAccessCodeSubmit = () => {
    if (accessCode === "3291") {
      // Success
      setShowAccessCodeModal(false);
      
      setShowSuccessModal(true);

      // Automatically close the success modal after 3 seconds and redirect
      setTimeout(() => {
        setShowSuccessModal(false);
        window.location.href = "/"; // Redirect to homepage or dashboard
      }, 3000);
    } else {
      // Invalid access code
      toast.error("Invalid access code. Try again."); // Toast notification for invalid access code
      setShowAccessCodeModal(false);
      setTimeout(() => {
        window.location.href = "/"; // Redirect to homepage or dashboard after 2 seconds
      }, 2000);
    }
  };

  return (
   <>
   <ProtectedRoute>
   <>
      {/* Place ToastContainer here to globally listen for toasts */}
     

      <FixedHeader />
      <div className="lg:min-h-screen h-auto flex items-center justify-center bg-gray-50 lg:pt-[55px] pt-[60px] mb-[55px] lg:mb-3">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          {/* Transfer Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {transferMethod === "Bank" && (
              <>
                <div>
                  <label
                    htmlFor="bankName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    required
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Enter your bank name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="accountNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    required
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Enter your account number"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount to Transfer
              </label>
              <input
                type="number"
                id="amount"
                required
                value={amount || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setAmount(value ? parseFloat(value) : 0); // Fallback to 0 if the input is empty
                }}
                placeholder={`Max: $${winningsAmount}`}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="transferMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Transfer Method
              </label>
              <select
                id="transferMethod"
                required
                value={transferMethod}
                onChange={(e) => setTransferMethod(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Bank">Bank</option>
                <option value="PayPal">PayPal</option>
                <option value="Mobile Money">Mobile Money</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="contactNumber"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleTransfer}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:mb-0"
            >
              Transfer Winnings
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[30%] md:w-[50%]">
            <p className="mb-8 text-center font-medium">
              Are you sure you want to transfer your winnings?
            </p>
            <div className="flex gap-8 items-center justify-center">
              <button
                onClick={handleCancelTransfer}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmTransfer}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Access Code Modal */}
      {showAccessCodeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[30%] md:w-[50%]">
            <p className="mb-8 text-center font-medium">
              Please enter your access code to complete the transfer.
            </p>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="mb-4 w-full p-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-center items-center space-x-6">
              <button
                onClick={() => setShowAccessCodeModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAccessCodeSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[30%] md:w-[50%] flex flex-col items-center justify-center">
            <div className="flex items-center flex-col space-x-4 my-4">
              {/* Green Circle with Checkmark SVG */}
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-green-600 text-center">
                Congratulations! Transfer pending...
              </p>
            </div>
          </div>
        </div>
      )}
    </>
   </ProtectedRoute>
  
    
 
   </>
  );
};

export default Transfer;