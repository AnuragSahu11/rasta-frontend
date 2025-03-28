import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Add your header, navigation, etc. here */}
      <main className="container mx-auto px-4">
        {children}
      </main>
      {/* Add your footer here */}
    </div>
  );
};

export default MainLayout;
