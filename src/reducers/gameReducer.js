import {
  START_MOVE,
  MOVE_SUCCESS,
  MOVE_ERROR,
  START_FLY,
  FLY_SUCCESS,
  FLY_ERROR,
  START_INIT,
  INIT_SUCCESS,
  INIT_ERROR,
  START_EXAMINE,
  EXAMINE_SUCCESS,
  EXAMINE_ERROR,
  START_TAKE,
  TAKE_SUCCESS,
  TAKE_ERROR,
  START_DROP,
  DROP_SUCCESS,
  DROP_ERROR,
  START_CARRY,
  CARRY_SUCCESS,
  CARRY_ERROR,
  START_RECEIVE,
  RECEIVE_SUCCESS,
  RECEIVE_ERROR,
  START_DASH,
  DASH_SUCCESS,
  DASH_ERROR,
  START_RECALL,
  RECALL_SUCCESS,
  RECALL_ERROR,
  START_WARP,
  WARP_SUCCESS,
  WARP_ERROR
} from "../actions";

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case START_INIT:
    case START_MOVE:
    case START_FLY:
    case START_EXAMINE:
    case START_TAKE:
    case START_DROP:
    case START_CARRY:
    case START_RECEIVE:
    case START_DASH:
    case START_RECALL:
    case START_WARP:
      return {
        ...state,
        isLoading: true
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case FLY_SUCCESS:
    case EXAMINE_SUCCESS:
    case TAKE_SUCCESS:
    case DROP_SUCCESS:
    case CARRY_SUCCESS:
    case RECEIVE_SUCCESS:
    case DASH_SUCCESS:
    case RECALL_SUCCESS:
    case WARP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case INIT_ERROR:
    case MOVE_ERROR:
    case FLY_ERROR:
    case EXAMINE_ERROR:
    case TAKE_ERROR:
    case DROP_ERROR:
    case CARRY_ERROR:
    case RECEIVE_ERROR:
    case DASH_ERROR:
    case RECALL_ERROR:
    case WARP_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
