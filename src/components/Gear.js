import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Gear = () => {
  const [{ playerState }] = useStateValue();

  return (
    <div>
      <div>Gear</div>
      <div>Bodywear: {playerState.bodywear}</div>
      <div>Footwear: {playerState.footwear}</div>
    </div>
  );
};

export default Gear;