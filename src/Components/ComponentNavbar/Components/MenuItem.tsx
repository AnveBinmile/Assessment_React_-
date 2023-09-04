import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemProps } from "../../utils/types/type";

const MenuItem: React.FC<NavItemProps> = ({ img, text,path }) => {
  return (
    <div className="w-[60%] active:font-bold flex justify-start gap-[30px] ml-[30px] text-white font-poppins text-16 font-semibold leading-24 cursor-pointer">
      <img src={img} alt="" />
      <NavLink to={path}>  <p className="text-white font-poppins text-base font-normal leading-6">{text}</p> </NavLink>
     
    </div>
  );
};

export default MenuItem;
