import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
