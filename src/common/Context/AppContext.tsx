import { createContext } from 'react';
import { TrendingCard } from '../../Components/utils/types/type';

interface appContextType {
  favArray: TrendingCard[];
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AppContext = createContext<appContextType>({favArray:[],showSideNav:false,setShowSideNav:()=>{}});

export default AppContext;