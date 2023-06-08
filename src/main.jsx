import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

import App from "./App.jsx";
import store from "./store";

import "./css/body.css";
import "./css/app.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
    <Analytics />
  </React.StrictMode>
);
