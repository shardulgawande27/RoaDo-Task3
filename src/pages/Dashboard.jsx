import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ChartSection from "../components/mainSection/ChartSection";
import Highlights from "../components/highlights/Highlights";
import Header from "../components/header/Header";
import QuickAction from "../components/mainSection/QuickAction";
import HighPriority from "../components/mainSection/HighPriority";

const Dashboard = () => {
  return (
    <div className="flex justify-between w-full">
      <Sidebar />
      <div className="main  mt-5 ">
        <Header />
        <div className="flex-grow">
          <ChartSection />
          <QuickAction />
          <HighPriority />
        </div>
      </div>
      <Highlights />
    </div>
  );
};

export default Dashboard;
