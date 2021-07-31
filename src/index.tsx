import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom"; // BrowserRouter

import { store } from "./redux/store";

import App from "./components/app";

import "./index.css";

render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
