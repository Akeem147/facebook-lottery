"use client";
import FixedHeader from "@/components/FixedHeader";
import FixedHeader2 from "@/components/FixedHeader2";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const Dashboard: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const user = {
    name: "Jamie Castonguay",
    balance: "$5,000,000",
    transactions: [
      {
        id: 1,
        date: "2024-12-27",
        description: "Publishers clearing house",
        amount: "$5,000,000",
      },
      {
        id: 2,
        date: "2024-12-28",
        description: "Winning Funds Transfer",
        amount: "-$500,000",
      },
    ],
  };

  interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    type: "debit" | "credit";
  }

  const transactions: Transaction[] = [
    {
      id: 1,
      date: "2024-12-26",
      description: "PCH Deposit",
      amount: 2500000,
      type: "credit",
    },
    {
      id: 2,
      date: "2024-12-26",
      description: "PCH Deposit",
      amount: 2500000,
      type: "credit",
    },
  ];

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen pb-7">
        {/* Header */}
        <FixedHeader />
        <FixedHeader2 />

        {/* Logout Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center ">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Are you sure you want to logout?
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="mt-[60px]">
          {/* Banner */}
          <section className="bg-green-100 p-4 shadow-lg mb-6">
            <h2 className="text-lg md:text-xl font-bold text-green-700">
              🎉 Congratulations, {user?.name || "Guest"}! You&apos;re our
              latest lucky winner! 🎉
            </h2>

            <p className="text-sm text-green-600">
              Verify your prize details and claim your winnings below.
            </p>
          </section>

          {/* Account Summary */}
          <section className="bg-white p-4 rounded-lg shadow-lg mb-4 lg:w-full w-[91%] mx-auto">
            <div className="text-start mb-8">
              <p className="text-[#191919] text-2xl font-semibold">
                Welcome, {user.name}
              </p>
              <p className="text-sm text-[#191919]">{currentDateTime}</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-8">
              {/* Current Balance */}
              <div className="flex items-center gap-3">
                <div className="p-4 hidden lg:block bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-1.25c-1.61-.91-3.33-1.89-3.33-4.37 0-2.1 1.71-3.83 3.83-3.83s3.83 1.73 3.83 3.83c0 2.48-1.72 3.46-3.33 4.37V16.5h-1zm1-3.5c.82 0 1.5-.67 1.5-1.5S11.82 9.5 11 9.5s-1.5.67-1.5 1.5S10.18 13 11 13z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-[#191919] font-normal text-center md:text-left text-xl">
                    Current Balance
                  </p>
                  <h2 className="text-2xl font-bold text-green-600">
                    {user.balance}
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* Lottery Ticket Preview */}
          <section className="bg-white p-4 rounded-lg shadow-lg mb-4 lg:w-full w-[91%] mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-[#191919]">
              Your Lottery Ticket
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg text-left">
              <p className="text-lg font-semibold text-[#191919]">
                #PCH-20241120
              </p>
              <p className="text-sm text-[#191919]">
                Claim Amount: <span className="text-green-600">$5,000,000</span>
              </p>
            </div>
            <div className="text-left mt-4">
              <Link
                href={"/claim-winnings"}
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                Claim Now
              </Link>
            </div>
          </section>

          {/* Transactions Table */}
          <section className="bg-white p-4 pl-0 rounded-lg shadow-lg mb-10 lg:w-full w-[91%] mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#191919] px-4">
              Recent Transactions
            </h2>
            <ul className="divide-y divide-gray-200 px-4">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="py-4 flex items-center gap-4 justify-between"
                >
                  <div>
                    <p className="text-gray-700 font-medium">
                      {transaction.description}
                    </p>
                    <p className="text-gray-500 text-sm">{transaction.date}</p>
                  </div>
                  <div
                    className={`text-sm font-semibold mb-3 ${
                      transaction.type === "credit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "debit" ? "-" : "+"}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
