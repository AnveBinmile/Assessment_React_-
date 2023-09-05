import { useContext } from "react";
import NavMain from "./Components/NavMain";
import Navhead from "./Components/Navhead";
import AppContext from "../Context/AppContext";

const ComponentNavbar: React.FC = () => {
  const data = useContext(AppContext);

  const {showSideNav} = data;

  console.log('showSideNav inside compo sidenavbar',showSideNav);
  return (


    <div
      className={` ${showSideNav?'visible':'invisible'} sm:visible componentNavbar z-50 shadow-2xl shadow-purple-400 py-[40px] sm:w-[23%] w-[80%] md:bg-greyBlack bg-black opacity-90  min-w-[230px] max-w-[300px] h-[100vh] fixed z-{30} flex flex-col justify-start gap-[100px] p-[20px]`}
    >
      <Navhead />
      <NavMain />
    </div>
  );
};

export default ComponentNavbar;
