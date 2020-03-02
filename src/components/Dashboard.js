import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import Abilities from "./Abilities";
import Wallet from "./Wallet";
import Gear from "./Gear";
import Stats from "./Stats";
import Room from "./Room";

const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();
  return (
    <div>
      <Stats />
      <Abilities />
      <Wallet />
      <Gear />
      <Room />
    </div>
  );
};

export default Dashboard;