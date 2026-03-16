import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ModalContextProvider from "./contexts/ModalProvider";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import "./styles/index.css";
import { ToastsContextProvider } from "./contexts/ToastsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <ToastsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToastsContextProvider>
    </ModalContextProvider>
  </StrictMode>,
);
