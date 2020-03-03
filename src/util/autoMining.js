import {
    warp,
    recall,
    examine,
    initGame,
    getLastProof,
    findProofOfWork,
    mine
  } from "../actions";
  import { traverse } from "./traverse";
  import { map } from "../util/map";
  import { compiledCPU } from "./cpu";
  
  export const mineCoin = async dispatch => {
    console.log("getting last proof...");
    let lastProof = await getLastProof(dispatch);
    console.log("last proof: ", lastProof);
    let { proof, difficulty } = lastProof;
    console.log("finding proof of work...");
    let newProof = findProofOfWork(proof, difficulty);
    console.log("proof of work found!");
    return await mine(dispatch, newProof);
  };
  
  export const autoCoinMiner = async dispatch => {
    // First init to get starting room
    let init = await initGame(dispatch);
  
    // Check to see if you're in the light(regular) world, if not, warp
    if (map[init.room_id] === undefined) {
      let warpToLight = await warp(dispatch);
      init = warpToLight;
    }
  
    while (true) {
      let cpu = new compiledCPU();
      // Go to well (room 55)
      if (init.room_id !== 55) {
        await recall(dispatch);
        await traverse(dispatch, 55, map);
      }
      // Examine (res.data.description === string to decode)
      let message = await examine(dispatch, "Wishing Well");
      // Decode to get room #
      cpu.load(message.description);
      let room_number = cpu.run();
      console.log("room number", room_number);
      // traverse to room
      await traverse(dispatch, +room_number, map);
      // mine coin
      await mineCoin(dispatch);
      init = { room_id: +room_number };
    }
  };