// ProtectedRoute.tsx
"use client"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();  // Ensure this is getting the context properly
  const router = useRouter();

  // Effect to handle redirection if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");  // Use replace to prevent pushing to history stack
    }
  }, [loading, user, router]);

  // If still loading or user is not authenticated, render nothing or a loader
  if (loading || !user) {
    return <SkeletonLoader/>  // or your skeleton loader
  }

  // If authenticated, render children (the protected content)
  return <>{children}</>;
};

export default ProtectedRoute;
