import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Room = () => {
  const [{ gameState }] = useStateValue();

  return (
    <div>
    </div>
  );
};

export default Room;