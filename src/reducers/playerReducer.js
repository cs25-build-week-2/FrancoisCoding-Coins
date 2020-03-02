import { START_STATUS, STATUS_SUCCESS, STATUS_ERROR } from "../actions";

export const playerReducer = (state, { type, payload }) => {
  // status endpoint
  switch (type) {
    case START_STATUS:
      return {
        ...state,
        isLoading: true
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case STATUS_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
