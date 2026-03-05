import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastsContextProvider } from "./contexts/ToastsProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastsContextProvider maxCount={3}>
      <App />
    </ToastsContextProvider>
  </StrictMode>,
);
