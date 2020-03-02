import { initGame } from "../actions/general";
import { move } from "../actions/movement";

// adds room data to graph
function addRoom(data, graph) {
  let neighbors = {};
  for (let i = 0; i < data.exits.length; i++) {
    neighbors[data.exits[i]] = "?";
  }
  graph[data.room_id] = { ...data, neighbors };
}

function randomChoice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// finds a direction to go towards an unexplored room
function validDirection(data, graph) {
  let options = [];
  let neighbors = Object.entries(data.neighbors);
  for (let [direction] of neighbors) {
    if (graph[data.room_id].neighbors[direction] === "?") {
      options.push(direction);
    }
  }
  if (options.length > 0) {
    return randomChoice(options);
  } else {
    return null;
  }
}

// finds the shortest path back to a valid room
function bfs(startingRoom, graph) {
  console.log("STARTING ROOM BFS", startingRoom);
  let queue = [];
  queue.push([startingRoom]);
  const visited = new Set();
  while (queue.length > 0) {
    let path = queue.shift();
    let room = path[path.length - 1];
    if (validDirection(room, graph) !== null) {
      return path;
    }
    if (!visited.has(room.room_id)) {
      visited.add(room.room_id);
      let neighbors = graph[room.room_id].neighbors;
      for (let neighbor in neighbors) {
        let new_path = [...path, graph[neighbors[neighbor]]];
        queue.push(new_path);
      }
    }
  }
}

// traverse back to valid room
export async function walkBack(dispatch, path) {
  let startingRoom = path.shift();
  let nextRoom = null;

  while (path.length > 0) {
    nextRoom = path.shift();
    let directions = ["n", "s", "e", "w"];

    for (let dir of directions) {
      if (startingRoom.neighbors[dir] === nextRoom.room_id) {
        console.log("NEXT ROOM ID", nextRoom.room_id);
        await move(dispatch, dir, nextRoom.room_id);
        startingRoom = nextRoom;
        break;
      }
    }
  }
  return startingRoom;
}

const opposite_direction = { s: "n", n: "s", e: "w", w: "e" };

export const makeGraph = async dispatch => {
  const graph = {}; // store the map

  // Initialize first room at current location
  console.log("hit makeGraph");
  let room = await initGame(dispatch);
  let prev_room;

  while (Object.keys(graph).length < 500) {
    if (!graph[room.room_id]) {
      addRoom(room, graph);
    }

    let direction = validDirection(graph[room.room_id], graph);

    prev_room = room;

    if (direction) {
      room = await move(dispatch, direction);
      console.log(
        `Going from room ${prev_room.room_id} to room ${room.room_id}, going ${direction}`
      );

      if (!graph[room.room_id]) {
        addRoom(room, graph);
      }

      graph[prev_room.room_id].neighbors[direction] = room.room_id;

      graph[room.room_id].neighbors[opposite_direction[direction]] =
        prev_room.room_id;
    } else {
      let bfsPath = bfs(graph[room.room_id], graph);
      room = await walkBack(dispatch, bfsPath);
    }

    // log the state of the traversal
    if (Object.keys(graph).length % 10 === 0) {
      console.log("GRAPH", graph);
      console.log("JSON GRAPH", JSON.stringify(graph));
    }
  }
};
