import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Wallet = () => {
  const [{ playerState, gameState }] = useStateValue();
  const [showInventory, setInventory] = useState(true);
  return (
    <>
    <div className="wallet">
      <p>
        Gold: <span className="statValue">{playerState.gold}</span>
      </p>
      <p>
        Coins: <span className="statValue">{gameState.coins}</span>
      </p>
      <p>
        Snitches: <span className="statValue">{playerState.snitches}</span>
      </p>
    <div className="inventory-button" onClick={() => setInventory(!showInventory)}><p>Inventory {showInventory ? "▸" : "▾"}</p></div>
    </div>
    {showInventory && (
        <div classList="inventory">
          <h2>Inventory</h2>
          {" "}
          <ul>
            {playerState.inventory.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Wallet;