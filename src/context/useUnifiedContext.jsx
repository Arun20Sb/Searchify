import { useContext } from "react";
import SearchAnything_Context from "./Search_CreateContext"; // Import the context

function useUnifiedContext() {
  const context = useContext(SearchAnything_Context); // Access the context

  if (context === undefined) {
    throw new Error("useUnifiedContext must be used within a UnifiedContextP provider");
  }

  return context;
}

export { useUnifiedContext };
