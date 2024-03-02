import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfiguratorProvider } from "./contexts/Configurator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <App />
    </ConfiguratorProvider>
  </React.StrictMode>
);
