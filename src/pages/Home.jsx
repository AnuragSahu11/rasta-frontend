import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
        <Button className="mt-4">Get Started</Button>
      </div>
    </MainLayout>
  );
};

export default Home;
