import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Import the UnifiedContextP from your provider file
import UnifiedContextP from "./context/UnifiedContextP.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UnifiedContextP>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UnifiedContextP>
  </StrictMode>
);
