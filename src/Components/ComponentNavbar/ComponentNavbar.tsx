import { useContext } from 'react';
import AppContext from '../../common/Context/AppContext';
import { NavMain,NavHead } from './Components/index';

const ComponentNavbar: React.FC = () => {
  const data = useContext(AppContext);
  const { showSideNav } = data;
  return (
    <div
      className={` ${
        showSideNav ? 'visible' : 'invisible'
      } sm:visible componentNavbar z-50 shadow-2xl shadow-purple-400 py-[40px] sm:w-[23%] w-[80%] md:bg-greyBlack bg-black opacity-90  sm:min-w-[230px] sm:max-w-[300px] h-[100vh] fixed z-{30} flex flex-col justify-start gap-[100px] p-[20px]`}
    >
      <NavHead />
      <NavMain />
    </div>
  );
};

export default ComponentNavbar;
