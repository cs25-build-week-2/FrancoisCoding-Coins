import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Stats = () => {
  const [{ playerState }] = useStateValue();

  return (
    <div>
      <div>Name: {playerState.name}</div>
      <div>Stats</div>
      <div>Strength: {playerState.strength}</div>
      <div>Speed: {playerState.speed}</div>
      <div>Encumbrance: {playerState.encumbrance}</div>
    </div>
  );
};

export default Stats;