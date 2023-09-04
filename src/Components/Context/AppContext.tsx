import { createContext } from "react";
import { TrendingCard } from "../utils/types/type";

import { appContextType } from "../utils/types/type";

const AppContext = createContext<appContextType>({
  favArray: [],
  showSideNav: false,
  setShowSideNav: () => {},
});

export default AppContext;
