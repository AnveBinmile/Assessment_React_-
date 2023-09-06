import { ReactNode, createContext, useState } from 'react';

import { appContextType } from './utils/types/type';
export const AppContext = createContext<appContextType>({
  favArray: [],
  showSideNav: false,
  setShowSideNav: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <AppContext.Provider
      value={{
        favArray: [],
        showSideNav: showSideNav,
        setShowSideNav: setShowSideNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

