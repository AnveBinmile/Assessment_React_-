import React from "react";
import { coffee } from "../../ComponentImages";

const Navhead = () => {
  return (
    <div className="navhead flex justify-start ml-[30px] items-center gap-[20px] w-[100%]">
        <img src={coffee} alt="" />
        <h1 className="text-white font-poppins text-lg font-bold leading-6 tracking-wide uppercase">WATCH</h1>
    </div>
  );
};

export default Navhead;
