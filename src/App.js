import React, { useEffect } from "react";
import { initGame, playerStatus } from "./actions/general";
import { map } from "./util/map";
import { collectTreasure } from "./util/autoGold";
import { useStateValue } from "./hooks/useStateValue";
import "./styles/main.scss";
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";

function App() {
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    initGame(dispatch);
    playerStatus(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;