import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./component/context-mouse.jsx";
import AnimateMouse from "./component/mouse-animation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <AnimateMouse />
      <App />
    </ContextProvider>
  </React.StrictMode>
);
