import {
  GETTING_LAST_PROOF,
  GET_LAST_PROOF_SUCCESS,
  GET_LAST_PROOF_ERROR,
  FINDING_NEW_PROOF,
  NEW_PROOF_FOUND,
  START_MINING,
  MINING_SUCCESS,
  MINING_ERROR
} from "../actions";

export const miningReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_LAST_PROOF:
    case START_MINING:
      return {
        ...state,
        isLoading: true
      };
    case GET_LAST_PROOF_SUCCESS:
    case MINING_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case GET_LAST_PROOF_ERROR:
    case MINING_ERROR:
      return {
        ...state,
        serverError: payload,
        isLoading: false
      };
    default:
      return state;
  }
};