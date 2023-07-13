import React from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import MainDash from "../components/Dashboard/MainDash/MainDash";
import RightSide from "../components/Dashboard/RightSide/RightSide";

const DashboardPage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default DashboardPage;
