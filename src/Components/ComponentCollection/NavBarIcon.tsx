import React, { useContext, MouseEventHandler, useEffect } from "react";
import AppContext from "../Context/AppContext";

const NavBarIcon = () => {
  // const { showSideNav, setShowSideNav } = useContext(AppContext);

  // console.log('=>>',showSideNav,setShowSideNav);

  const data = useContext(AppContext);
  const { showSideNav, setShowSideNav }  = data;


  const resetShowNavBar: MouseEventHandler<HTMLDivElement> = () => {
    console.log(showSideNav, 'CLICKED');
    setShowSideNav((showSideNav) => !showSideNav);
    // setShowSideNav(true)
  };

  console.log(showSideNav, 'CLICKED');

  // useEffect(() => {}, [showSideNav]);

  return (
    <div
      onClick={resetShowNavBar}
      className="px-[5px] absolute z-70 sm:hidden"
    >
      <i className="fa fa-bars" style={{ fontSize: "24px" }}></i>
    </div>
  );
};

export default NavBarIcon;
