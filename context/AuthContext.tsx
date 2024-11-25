"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define your context type
interface AuthContextType {
  user: any;
  loading: boolean;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);  // Holds user data
  const [loading, setLoading] = useState(true);  // Tracks loading state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");  // Check for user in localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // If a user is found, set it in state
    }
    setLoading(false);  // Set loading to false after the check
  }, []);

  // Login function, sets user data and stores it in localStorage
  const login = (user: any) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));  // Save user to localStorage
  };

  // Logout function, clears user data and removes it from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");  // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext values
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
