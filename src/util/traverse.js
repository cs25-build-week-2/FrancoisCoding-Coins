import { dashBack, withDash } from "./powers";
import { initGame } from "../actions";

export function getPathToRoom(startingRoom, graph, roomId) {
  console.log("STARTING ROOM BFS", startingRoom);
  console.log(graph)
  let queue = [];
  queue.push([startingRoom]);
  const visited = new Set();
  while (queue.length > 0) {
    let path = queue.shift();
    let room = path[0];
    //Condition to return path when given room id is found aka shop, return that path, otherwise keep searching for it
    if (room.id === roomId) {
      return path;
    }
    if (!visited.has(room.id)) {
      visited.add(room.id);
      let connections = graph[room.id].connections;
      for (let connection in connections) {
        let new_path = [...path, graph[connections[connection]]];
        queue.push(new_path);
      }
    }
  }
}

export async function traverse(dispatch, target, map) {
  let room = await initGame(dispatch);

  let path = getPathToRoom(map[room.id], map, target);
  console.log("room", room, "path", path);

  // convert path to include possible dashes
  path = withDash(path, map);
  console.log("Dashed path", path);

  return await dashBack(dispatch, path);
}
