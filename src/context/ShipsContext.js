import { createContext } from "react";
import { shipsReducer } from "../reducer/shipsReducer";
import { useReducer } from "react";
import { initialShips } from "../reducer/shipsReducer";

export const ShipsContext = createContext();

const ShipsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipsReducer, initialShips);

  return (
    <ShipsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContextProvider;
