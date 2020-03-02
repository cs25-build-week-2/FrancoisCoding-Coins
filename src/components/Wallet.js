import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Wallet = () => {
  const [{ playerState, gameState }] = useStateValue();
  console.log(playerState);
  return (
    <div>
      <div>Virtual Wallet</div>
      <div>Gold Found: {playerState.gold}</div>
      <div>Mined Coins: {gameState.coins}</div>
      <div>
        Inventory:{" "}
        {playerState.inventory.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Wallet;