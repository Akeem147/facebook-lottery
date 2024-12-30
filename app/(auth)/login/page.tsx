"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      if (email === "Carolmarusak01@gmail.com" && password === "Carol123") {
        toast.success("Logged in successfully!", {
          icon: "✅",
        });

        const user = { email };
        login(user);  // Login function stores user in context and localStorage

        router.push("/"); // After login, navigate to protected route
      } else {
        toast.error("Incorrect login details", {
          icon: "🚫",
        });
      }
    } catch {
      toast.error("Something went wrong, please try again.", {
        icon: "🚫",
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 text-white">
        <div className="w-[90%] mx-auto lg:w-[350px] md:w-[500px] lg:mx-auto md:mx-auto rounded-xl shadow-lg bg-opacity-50 backdrop-blur-md bg-blue-800/60 p-6 ml-5">
          <div className="text-center mb-6">
            <Image
              src="/facebook.png" // Add your Facebook logo in the public folder
              alt="Facebook Logo"
              width={40}
              height={40}
              className="mx-auto"
            />
            <h1 className="text-3xl font-bold mt-4">Facebook Lottery</h1>
            <p className="mt-2 text-blue-200">
              Log in to manage your lottery winnings.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              autoComplete="current-email"
              className="w-full p-3 rounded-lg bg-blue-900/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full p-3 rounded-lg bg-blue-900/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-4 text-blue-200">
            <p>
              Need help?
              <a href="#" className="underline text-blue-300 hover:text-blue-400">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}