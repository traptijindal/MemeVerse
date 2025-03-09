import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { DarkModeProvider } from "./DarkModeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <DarkModeProvider>
        <App />
   </DarkModeProvider>   
 </React.StrictMode>
);
