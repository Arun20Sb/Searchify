import { useContext } from "react";
import { ResultContext } from "./ResultContextP";

function useResults() {
  const context = useContext(ResultContext);
  if (context === undefined) {
    throw new Error("useResults must be used within a ResultContextProvider");
  }
  return context;
}

export { useResults };
