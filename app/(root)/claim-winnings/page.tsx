"use client"
import FixedHeader from '@/components/FixedHeader';
import React, { useState } from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";

interface Errors {
  [key: string]: string;
}

const ClaimWinnings = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    claimTicketNumber: '',
    claimId: '',
    email: '',
    phoneNumber: '',
    address: '',
    ssn: '',
    driversLicense: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // New state for success modal

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClaimClick = () => {
    // Initialize an empty errors object
    const newErrors: typeof errors = {};

    // Validate each field
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.claimTicketNumber) {
      newErrors.claimTicketNumber = 'Claim ticket number is required.';
    } else if (formData.claimTicketNumber !== '20241119') {
      newErrors.claimTicketNumber = 'Invalid claim ticket number';
    }

    if (!formData.claimId) {
      newErrors.claimId = 'Claim ID is required.';
    } else if (formData.claimId !== '90823892') {
      newErrors.claimId = 'Invalid claim ID';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
    }

    if (!formData.address) {
      newErrors.address = 'Address is required.';
    }

    if (!formData.ssn) {
      newErrors.ssn = 'SSN is required.';
    } else if (!/^\d{9}$/.test(formData.ssn)) {
      newErrors.ssn = 'SSN must be exactly 9 digits.';
    }

    if (!formData.driversLicense) {
      newErrors.driversLicense = "Driver's license number is required.";
    }

    // Set errors or proceed if no errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setShowConfirmationModal(true);
    }
  };

  const handleConfirmClaim = () => {
    // Show success modal
    setShowSuccessModal(true);
    // Clear form data after successful claim
    setFormData({
      fullName: '',
      claimTicketNumber: '',
      claimId: '',
      email: '',
      phoneNumber: '',
      address: '',
      ssn: '',
      driversLicense: '',
    });
    
    
  };

  const handleCancelClaim = () => {
    setShowConfirmationModal(false);
  };

  // Check if the form is valid
  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== '') &&
    formData.claimTicketNumber === '20241119' && // Ensure claimTicketNumber is exactly 20241119
    formData.claimId === '90823892' && // Ensure claimId is exactly 90823892
    /^\d{9}$/.test(formData.ssn) &&
    /^\d{8,16}$/.test(formData.driversLicense);

  return (
   <ProtectedRoute>
        <>
      <FixedHeader />
      <div className="flex flex-col items-center min-h-screen p-3 pt-[60px]">
        <div className="w-full bg-white rounded-lg py-8 px-3 lg:px-0">
          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            {/* Claim Ticket Number */}
            <div>
              <label htmlFor="claimTicketNumber" className="block text-sm font-medium text-gray-700">
                Claim Ticket Number
              </label>
              <input
                type="text"
                id="claimTicketNumber"
                name="claimTicketNumber"
                value={formData.claimTicketNumber}
                onChange={handleInputChange}
                placeholder="Enter your claim ticket number"
                className={`w-full mt-2 px-4 py-2 border ${
                  errors.claimTicketNumber ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              />
              {errors.claimTicketNumber && <p className="text-red-500 text-sm">{errors.claimTicketNumber}</p>}
            </div>

            {/* Claim ID */}
            <div>
              <label htmlFor="claimId" className="block text-sm font-medium text-gray-700">
                Claim ID
              </label>
              <input
                type="text"
                id="claimId"
                name="claimId"
                value={formData.claimId}
                onChange={handleInputChange}
                placeholder="Enter your claim ID"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.claimId && <p className="text-red-500 text-sm">{errors.claimId}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="123-456-7890"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, City, Country"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* SSN */}
            <div>
              <label htmlFor="ssn" className="block text-sm font-medium text-gray-700">
                Social Security Number (SSN)
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                value={formData.ssn}
                onChange={handleInputChange}
                placeholder="XXX-XX-XXXX"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.ssn && <p className="text-red-500 text-sm">{errors.ssn}</p>}
            </div>

            {/* Driver's License */}
            <div>
            <label htmlFor="driversLicense" className="block text-sm font-medium text-gray-700">
  Driver&apos;s License Number
</label>

              <input
                type="text"
                id="driversLicense"
                name="driversLicense"
                value={formData.driversLicense}
                onChange={handleInputChange}
                placeholder="Enter driver's license number"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.driversLicense && <p className="text-red-500 text-sm">{errors.driversLicense}</p>}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="button"
                onClick={handleClaimClick}
                disabled={!isFormValid}
                className={`w-full py-2 text-white font-semibold rounded-md mb-8 lg:mb-0 ${
                  isFormValid ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Claim Winnings
              </button>
            </div>
          </form>

          {/* Confirmation Modal */}
          {showConfirmationModal && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] sm:w-[400px]">
                <h2 className="text-center font-bold text-xl text-blue-600 mb-4">Claim Confirmation</h2>
                <p className="text-center text-gray-700 mb-6">Are you sure you want to claim your winnings?</p>
                <div className="flex justify-around">
                  <button
                    onClick={handleCancelClaim}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmClaim}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Success Modal */}
          {showSuccessModal && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] sm:w-[400px]">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    className="w-16 h-16"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 11l3 3L22 4M9 11L7 9l-3 3"
                    />
                  </svg>
                </div>
                <h2 className="text-center font-bold text-xl text-green-600 mb-4">You have successfully claimed your winnings!</h2>
                <p className="text-center text-gray-700 mb-6">Please proceed to transfer your winnings.</p>
                <div className="text-center">
                  <button
                    onClick={() => window.location.href = '/transfer'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Go to Transfer Page
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
   </ProtectedRoute>
   
  
  );
};

export default ClaimWinnings;
 