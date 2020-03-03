import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Gear = () => {
  const [{ playerState }] = useStateValue();

  return (
    <div className="gear">
      <p>
        Bodywear:{" "}
        {playerState.bodywear ? (
          <span className="statValue">{playerState.bodywear}</span>
        ) : (
          "No bodywear."
        )}
      </p>
      <p>
        Footwear:{" "}
        {playerState.footwear ? (
          <span className="statValue">{playerState.footwear}</span>
        ) : (
          "No footwear."
        )}
      </p>
    </div>
  );
};

export default Gear;