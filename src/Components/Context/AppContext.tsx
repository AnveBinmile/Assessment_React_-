import { createContext } from "react";
import { appContextType } from "../utils/types/type";

const AppContext = createContext<appContextType>({
  favArray: [],
  showSideNav: true,
  setShowSideNav: () => {},
});

export default AppContext;
