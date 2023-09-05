import Profile from "./components/Profile";
import Menu from "./components/Menu";

const UpperNavbar = () => {
  return (
    <div className="sm:h-[100px]  z-40 backdrop-blur-sm  fixed h-[80px] mx-auto w-[83%] items-center justify-between flex  sm:px-[50px]">
      <Menu />
      <Profile />
    </div>
  );
};

export default UpperNavbar;
