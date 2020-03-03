import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Stats = () => {
  const [{ playerState }] = useStateValue();

  return (
    <div className="stats">
      <h1><span className="statValue">{playerState.name ? playerState.name : "Unnamed soul"}</span></h1>
      <p>Strength: <span className="statValue">{playerState.strength}</span></p>
      <p>Speed: <span className="statValue">{playerState.speed}</span></p>
      <p>Encumbrance: <span className={playerState.encumbrance !== 0 ? "statDanger" : "statValue"}>{playerState.encumbrance}</span></p>
    </div>
  );
};

export default Stats;