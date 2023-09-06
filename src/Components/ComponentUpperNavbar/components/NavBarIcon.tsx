import { useContext, MouseEventHandler } from 'react';
import AppContext from '../../../common/Context/AppContext';

const NavBarIcon = () => {
  const data = useContext(AppContext);
  const { showSideNav, setShowSideNav }  = data;

  const resetShowNavBar: MouseEventHandler<HTMLDivElement> = () => {
    setShowSideNav((showSideNav) => !showSideNav);
  };

  return (
    <div
      onClick={resetShowNavBar}
      className="px-[5px] absolute z-70 sm:hidden"
    >
      <i className="fa fa-bars" style={{ fontSize: '24px' }}></i>
    </div>
  );
};

export default NavBarIcon;
