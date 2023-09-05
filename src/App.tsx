import "./App.css";
import Content from "./Components/Content/Content";
import ComponentNavbar from "./Components/ComponentNavbar/ComponentNavbar";
import { useState } from "react";

import AppContext from "./Components/Context/AppContext";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  console.log('App -> showsideNav',showSideNav);

  return (
    <AppContext.Provider
      value={{
        favArray: [],
        showSideNav,
        setShowSideNav
      }}
    >
      <div className="App bg-black flex justify-center sm:justify-start">
        <ComponentNavbar />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
