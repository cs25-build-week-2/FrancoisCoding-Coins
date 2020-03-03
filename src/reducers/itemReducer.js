import { START_TRANSMOG, TRANSMOG_SUCCESS, TRANSMOG_ERROR } from "../actions";

export const itemReducer = (state, { type, payload }) => {
  switch (type) {
    case START_TRANSMOG:
      return {
        ...state,
        isLoading: true
      };
    case TRANSMOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case TRANSMOG_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};