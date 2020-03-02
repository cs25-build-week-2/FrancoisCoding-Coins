// write the algorithms to utilize dash and other powers that need to be figured out
import { dash, fly, move } from "../actions";

export async function dashBack(dispatch, path) {
  let startingRoom;
  while (path.length > 0) {
    startingRoom = path.shift();
    if (startingRoom.length > 3) {
      let rooms = startingRoom
        .slice(1, startingRoom.length)
        .map(room => room.room_id)
        .join(",");
      let dashing = await dash(
        dispatch,
        startingRoom[0],
        startingRoom.length - 1,
        rooms
      );
      console.log("DASHING", dashing);
    } else {
      let direction = startingRoom[0];
      for (let i = 1; i < startingRoom.length; i++) {
        if (startingRoom[i].terrain !== "CAVE") {
          await fly(dispatch, direction);
        } else {
          await move(dispatch, direction, `${startingRoom[i].room_id}`);
        }
      }
    }
  }
}

export function withDash(path, map) {
  let finalPath = [];
  let startingRoom = path[0];

  let neighbors = Object.entries(map[startingRoom.room_id].neighbors); // [['n', 123], ...]

  let initialDirection = neighbors.filter(
    ([, value]) => value === path[1].room_id
  )[0][0];

  let dashPath = [initialDirection];

  if (path.length <= 2) {
    dashPath.push(path[1]);
    finalPath.push(dashPath);
    console.log("dash path", dashPath, "final path", finalPath);
  } else {
    for (let i = 1; i < path.length - 1; i++) {
      let nextRoom = path[i];

      if (i + 1 < path.length - 1) {
        // if the room in the direction we want to go isn't the next room
        if (
          map[nextRoom.room_id].neighbors[initialDirection] !==
          path[i + 1].room_id
        ) {
          // update the direction we need to go
          neighbors = Object.entries(map[nextRoom.room_id].neighbors);
          let currentDirection = neighbors.filter(
            ([key, value]) => value === path[i + 1].room_id
          )[0][0];
          if (initialDirection !== currentDirection) {
            initialDirection = currentDirection;
          }
          // add the room to current path and push to final since we're done going in the same direction
          dashPath.push(nextRoom);
          finalPath.push(dashPath);
          // add the new direction for the next sub path
          dashPath = [initialDirection];
        } else {
          dashPath.push(nextRoom);
        }
      }
      // if the next room is the last
      if (i + 1 === path.length - 1) {
        if (
          map[nextRoom.room_id].neighbors[initialDirection] !==
          path[i + 1].room_id
        ) {
          // if the next room in the direction we're going isn't the one we want
          // update direction
          neighbors = Object.entries(map[nextRoom.room_id].neighbors);
          let currentDirection = neighbors.filter(
            ([, value]) => value === path[i + 1].room_id
          )[0][0];
          if (initialDirection !== currentDirection) {
            initialDirection = currentDirection;
          }
          // push the room and then the subpath
          dashPath.push(nextRoom);
          finalPath.push(dashPath);
          // change direction and add to sub path
          dashPath = [initialDirection];
          // add the last few rooms and complete the path
          dashPath.push(nextRoom);
          dashPath.push(path[i + 1]);
          finalPath.push(dashPath);
        } else {
          // add the last few rooms and finalize path
          dashPath.push(nextRoom, path[i + 1]);
          finalPath.push(dashPath);
        }
      }
    }
  }
  return finalPath;
}
