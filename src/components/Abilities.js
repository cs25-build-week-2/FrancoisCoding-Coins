import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Abilities = () => {
  const [{ playerState }] = useStateValue();
  console.log(playerState);
  return (
    <div>
      <div>Unlocked Abilities</div>
      {playerState.abilities.map(ability => (
        <div>{ability.toUpperCase()}</div>
      ))}
    </div>
  );
};

export default Abilities;