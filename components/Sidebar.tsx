"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  HomeIcon,
  CurrencyDollarIcon,
  HandIcon,
  UsersIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";


export default function Sidebar() {
  const { logout } = useAuth();
  const pathname = usePathname()
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false);
 

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    setModalOpen(false);
    logout(); 
    router.push("/login")
  };

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

 

  const navLinks = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Claim", href: "/claim-winnings", icon: HandIcon },
    { name: "Transfer", href: "/transfer", icon: CurrencyDollarIcon },
    { name: "Winners", href: "/past-winners", icon: UsersIcon },
  ];


  const navLinks1 = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Claim", href: "/claim-winnings", icon: HandIcon },
    { name: "Transfer", href: "/transfer", icon: CurrencyDollarIcon },
    { name: "Winners", href: "/past-winners", icon: UsersIcon },
    { name: "Logout", href: null, icon: LogoutIcon, isLogout: true }, // Added logout
  ];
  

  return (
   <div>
<nav className="fixed lg:hidden bottom-0 lg:top-0 left-0 w-full lg:w-[240px] bg-white shadow-lg lg:h-screen border-t border-gray-200 flex lg:flex-col lg:justify-between">
  {/* Large Screen Header */}
  <div className="hidden lg:flex items-center gap-2 px-6 pt-6">
    <Image
      src="/facebook.png"
      alt="Facebook Logo"
      className=" text-blue-600"
      width={40}
      height={40}
    />
    <Link href="/" className="text-xl font-bold text-blue-600">
      Facebook Claims
    </Link>
  </div>

  {/* Navigation Links */}
  <ul className="flex lg:flex-col items-center justify-evenly w-full">
          {navLinks1.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <li
                key={link.name}
                className={`flex flex-col items-center py-2 cursor-pointer ${
                  isActive ? "text-blue-600 font-bold" : "text-gray-700"
                }`}
                onClick={link.isLogout ? handleLogoutClick : undefined}
              >
                {!link.isLogout ? (
                  <Link href={link.href || "#"}>
                    <div className="flex flex-col items-center lg:items-start space-y-1">
                      <Icon
                        className={`w-6 h-6 lg:w-6 lg:h-6 ${
                          isActive ? "text-blue-600" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs lg:text-lg ${
                          isActive ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center lg:items-start space-y-1">
                    <Icon className="w-6 h-6 text-gray-400" />
                    <span className="text-xs lg:text-lg text-gray-700">
                      {link.name}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>


  {/* Logout Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg text-center shadow-xl p-6 w-[90%]">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Confirm Logout
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to log out?
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md text-sm text-gray-700"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md text-sm font-medium text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )}
</nav>



<nav className="fixed hidden lg bottom-0 lg:top-0 left-0 w-full lg:w-[240px] bg-white shadow-lg lg:h-screen border-r border-gray-200 lg:flex lg:flex-col lg:justify-between">
      {/* Large Screen Header */}
      <div className="hidden lg:flex items-center gap-2 px-6 pt-6">
        <Image
          src="/facebook.png"
          alt="Facebook Logo"
          className=" text-blue-600"
          width={40} height={40}
        />
        <Link href="/" className="text-xl font-bold text-blue-600">
          Facebook
        </Link>
      </div>

      {/* Navigation Links */}
 <ul className="flex lg:flex-col lg:items-start lg:space-y-6 w-full lg:pl-4">
  {navLinks.map((link) => {
    const isActive = pathname === link.href; // Determine if the link is active
    const Icon = link.icon; // Get the icon component

    return (
      <li
        key={link.name}
        className={`flex flex-col items-center lg:items-start justify-center lg:justify-start gap-1 px-6 py-2 cursor-pointer ${
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }`}
      >
        <Link href={link.href || "#"} className="flex items-center space-y-1 space-x-3">
          <Icon
            className={`w-6 h-6 lg:w-6 lg:h-6 ${
              isActive ? "text-blue-600" : "text-gray-400"
            }`}
          />
          <span
            className={`text-xs lg:text-lg ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {link.name}
          </span>
        </Link>
      </li>
    );
  })}
</ul>


      {/* Logout Button for Large Screens */}
      <div className="hidden lg:block p-4 w-full border-t border-gray-200">
        <button
          onClick={handleLogoutClick}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md text-sm font-medium text-white shadow-md"
        >
          Logout
        </button>
      </div>

      {/* Logout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg text-center shadow-xl p-6 w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Confirm Logout
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md text-sm text-gray-700"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md text-sm font-medium text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>

   </div>
  );
}