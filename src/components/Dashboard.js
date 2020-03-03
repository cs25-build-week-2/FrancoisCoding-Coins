import React from "react";
import { useStateValue } from "../hooks/useStateValue";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header"

const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;