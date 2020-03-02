import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Abilities = () => {
  const [{ playerState }] = useStateValue();
  console.log(playerState);
  return (
    <div>
      <div>Unlocked Abilities</div>
      {playerState.abilities.map((ability, i) => (
        <li key={i}>{ability.toUpperCase()}</li>
      ))}
    </div>
  );
};

export default Abilities;