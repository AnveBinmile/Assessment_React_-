import React, { useContext, MouseEventHandler, useEffect } from "react";
import AppContext from "../Context/AppContext";

const NavBarIcon = () => {
  const { showSideNav, setShowSideNav } = useContext(AppContext);

  const resetShowNavBar: MouseEventHandler<HTMLDivElement> = () => {
    setShowSideNav((showSideNav) => !showSideNav);
  };

  useEffect(() => {}, [showSideNav]);

  return (
    <div
      onClick={resetShowNavBar}
      className="px-[5px] absolute z-{10} sm:hidden"
    >
      <i className="fa fa-bars" style={{ fontSize: "24px" }}></i>
    </div>
  );
};

export default NavBarIcon;
