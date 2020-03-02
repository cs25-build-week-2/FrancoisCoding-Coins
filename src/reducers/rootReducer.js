import {
  gameReducer,
  playerReducer,
  itemReducer,
  miningReducer
} from "./index";

export const rootReducer = (
  { gameState, playerState, itemState, miningState },
  action
) => ({
  gameState: gameReducer(gameState, action),
  playerState: playerReducer(playerState, action),
  itemState: itemReducer(itemState, action),
  miningState: miningReducer(miningState, action)
});
