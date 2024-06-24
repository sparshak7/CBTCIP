import { useContext } from "react";
import { Context } from "../App";

export const useSearchContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("Context is not defined.");
  }

  return context;
};
