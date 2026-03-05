import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastsContextProvider } from "./contexts/ToastsProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastsContextProvider>
      <App />
    </ToastsContextProvider>
  </StrictMode>,
);
