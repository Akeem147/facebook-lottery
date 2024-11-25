import FixedHeader from '@/components/FixedHeader';
import React from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";


const pastWinners = [
  { name: 'Emma Johnson', amount: 1500000, date: '2023-10-01', email: 'emma.johnson@example.com', state: 'New York', status: 'Claimed' },
  { name: 'Liam Anderson', amount: 2300000, date: '2023-10-15', email: 'liam.anderson@example.com', state: 'California', status: 'Pending' },
  { name: 'Olivia Smith', amount: 780000, date: '2023-10-20', email: 'olivia.smith@example.com', state: 'Texas', status: 'Claimed' },
  { name: 'Brain Willy', amount: 2200000, date: '2023-11-25', email: 'brainwilly.com', state: 'Arizona', status: 'Pending' },
  { name: 'Noah Williams', amount: 1200000, date: '2023-11-05', email: 'noah.williams@example.com', state: 'Florida', status: 'Claimed' },
  { name: 'Ava Brown', amount: 3000000, date: '2023-11-10', email: 'ava.brown@example.com', state: 'Washington', status: 'Pending' },
  { name: 'Ethan Davis', amount: 800000, date: '2023-11-15', email: 'ethan.davis@example.com', state: 'Georgia', status: 'Canceled' },
  { name: 'Sophia Wilson', amount: 1700000, date: '2023-11-20', email: 'sophia.wilson@example.com', state: 'Illinois', status: 'Claimed' },
  { name: 'James Taylor', amount: 900000, date: '2023-11-25', email: 'james.taylor@example.com', state: 'Arizona', status: 'Pending' },
];

const PastWinners = () => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Claimed':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded-full';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full';
      case 'Canceled':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded-full';
      default:
        return '';
    }
  };

  return (
    <ProtectedRoute>
       <>
      <FixedHeader />
      <div className="flex flex-col items-center lg:py-12 py-[60px] bg-gray-50 min-h-screen">
        <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-lg shadow-md">
          {/* Scrollable Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-sm md:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Amount</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {pastWinners.map((winner, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-gray-100`}
                  >
                    <td className="px-4 py-3 text-gray-700">{winner.name}</td>
                    <td className="px-4 py-3 text-gray-700">${winner.amount.toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-700">{winner.date}</td>
                    <td className="px-4 py-3">
                      <span className={getStatusClass(winner.status)}>
                        {winner.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
    </ProtectedRoute>
    
  
  );
};

export default PastWinners;
