import React, { useEffect } from "react";
import { initGame, playerStatus } from "./actions/general";
import { map } from "./util/map";
import { collectTreasure } from "./util/autoGold";
import { useStateValue } from "./hooks/useStateValue";
import Abilities from "./components/Abilities";
import Wallet from "./components/Wallet";
import Dashboard from "./components/Dashboard";

function App() {
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    initGame(dispatch);
    playerStatus(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      Treasure Hunt!
      <Dashboard />
    </div>
  );
}

export default App;