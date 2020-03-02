import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "./contexts/StateContext";

// Initial State
import { initialState } from "./reducers/initialState";

// Reducers
import { rootReducer } from "./reducers";

ReactDOM.render(
  <Provider initialState={initialState} reducer={rootReducer}>
    <App />
  </Provider>,
  document.getElementById("root")
);
