import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-950 relative">
      {/* Add your header, navigation, etc. here */}
      {children}
      {/* Add your footer here */}
    </div>
  );
};

export default MainLayout;
