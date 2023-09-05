import { createContext } from "react";
import { appContextType } from "../../Components/utils/types/type";
const AppContext = createContext<appContextType>({
  favArray: [],
  showSideNav: true,
  setShowSideNav: () => {},
});



export default AppContext;