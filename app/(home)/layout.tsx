import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;
