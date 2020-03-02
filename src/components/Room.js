import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Room = () => {
  const [{ gameState }] = useStateValue();

  return (
    <div>
      <div>Current Room #: {gameState.room_id}</div>
      <div>Coordinates: {gameState.coordinates}</div>
      <div>
        Exits:{" "}
        {gameState.exits.map((coor, i) => (
          <li key={i}>{coor}</li>
        ))}
      </div>
      <div>Terrain: {gameState.terrain}</div>
      <div>
        Other Players:{" "}
        {gameState.players.length > 0
          ? gameState.players.map((coor, i) => <li key={i}>{coor}</li>)
          : "None"}
      </div>
    </div>
  );
};

export default Room;