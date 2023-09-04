import React, { useContext, MouseEventHandler, useEffect } from "react";
import AppContext from "../Context/AppContext";

const NavBarIcon = () => {
  const { showSideNav, setShowSideNav } = useContext(AppContext);

  console.log("Before setting ", showSideNav);

  const resetShowNavBar: MouseEventHandler<HTMLDivElement> = () => {
    console.log("resetShowNavBar");
    setShowSideNav((showSideNav) => !showSideNav);
  };

  console.log("After setting ", showSideNav);

  useEffect(() => {
    console.log("After setting", showSideNav);
  }, [showSideNav]);

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
