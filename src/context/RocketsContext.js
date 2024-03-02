import { createContext } from "react";
import { rocketsReducer } from "../reducer/rocketsReducer";
import { useReducer } from "react";
import { initialRockets } from "../reducer/rocketsReducer";

export const RocketsContext = createContext();

const RocketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rocketsReducer, initialRockets);

  return (
    <RocketsContext.Provider value={{ state, dispatch }}>
      {children}
    </RocketsContext.Provider>
  );
};

export default RocketsContextProvider;
