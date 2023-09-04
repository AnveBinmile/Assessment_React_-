import { createContext } from "react";
import { TrendingCard } from "../utils/types/type";

interface appContextType {
  favArray: TrendingCard[];
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<appContextType>({favArray:[],showSideNav:false,setShowSideNav:()=>{}});

export default AppContext;
