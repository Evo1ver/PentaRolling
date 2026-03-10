import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ModalContextProvider from "./contexts/ModalProvider";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalContextProvider>
  </StrictMode>,
);