import React from "react";
import UpperNavbar from "../UpperNavbar/UpperNavbar"
import { RouteManager } from "../../routes/RouteManager";


const Content:React.FC = () => {

  const style = `content bg-black min-h-[100vh] ml-[0] overflow-x-hidden w-[90%] md:ml-[250px] lg:ml-[300px] sm:ml-[20%]`;

  return (
    <div className={style}>
      <UpperNavbar/>
      <RouteManager/>
    </div>
  )
}

export default Content