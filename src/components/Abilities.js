import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Abilities = () => {
  const [{ playerState }] = useStateValue();
  console.log(playerState);
  return (
    <div classList="abilities">
    <div>Abilities</div>
      <ul>
        <li>PRAY</li>
        <li>FLIGHT</li>
        <li>DASH</li>
        <li>CARRY</li>
        <li>RECALL</li>
        <li>WARP</li>
      </ul>

    </div>	  
  );
};

export default Abilities;