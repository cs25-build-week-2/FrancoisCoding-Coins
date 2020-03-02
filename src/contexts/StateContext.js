import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
