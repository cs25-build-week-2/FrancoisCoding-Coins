export const initialState = {
  // status endpoint impacts player
  playerState: {
    name: "", // status
    encumbrance: 0, //How much are you carrying?
    strength: 10, //How much can you carry?
    speed: 10, //How fast do you travel?
    gold: 0,
    bodywear: null,
    footwear: null,
    inventory: [],
    abilities: [], // abilities like fly, dash, carry
    status: [],
    has_mined: false,
    messages: [],
    errors: [],
    cooldown: null,
    snitches: 0,
    isLoading: false,
    serverError: null
  },
  gameState: {
    room_id: 0,
    title: "",
    description: "",
    coordinates: "",
    exits: [],
    cooldown: 1.0,
    errors: [],
    messages: [],
    elevation: 0,
    terrain: "",
    players: [],
    items: [],
    isLoading: false,
    coins: 0,
    serverError: null
  },
  miningState: {
    index: 0,
    transactions: "",
    proof: 0,
    previous_hash: "",
    cooldown: 0,
    messages: [],
    errors: [],
    difficulty: 0,
    // newProof: "",
    isLoading: false,
    serverError: null
  },
  // occurs only if someone examines a specific item
  itemState: {
    name: "",
    description: "",
    weight: 0,
    itemtype: "",
    level: 0,
    exp: 0,
    attributes: "",
    cooldown: 0,
    errors: [],
    messages: [],
    serverError: null
  }
};
