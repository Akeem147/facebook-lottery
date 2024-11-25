
import FixedHeader from "@/components/FixedHeader";
import FixedHeader2 from "@/components/FixedHeader2";
import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <main className="flex h-auto w-full font-inter bg-slate-100 bg-opacity-5">
      <Sidebar />
      <div className="flex size-full lg:ml-[252px] w-full flex-col overflow-x-hidden">
      <Toaster />
      <FixedHeader/>
      <FixedHeader2/>
        {children}
      </div>
    </main>
    </ProtectedRoute>
  );
}
