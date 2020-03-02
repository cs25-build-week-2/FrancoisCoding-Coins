import React, { useEffect } from "react";
import { initGame, playerStatus } from "./actions/general";
import { map } from "./util/map";
import { collectTreasure } from "./util/autoGold";
import { useStateValue } from "./hooks/useStateValue";
import Abilities from "./components/Abilities";
import Wallet from "./components/Wallet";

function App() {
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    playerStatus(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      Treasure Hunt!
      <Abilities />
      <Wallet />
    </div>
  );
}

export default App;