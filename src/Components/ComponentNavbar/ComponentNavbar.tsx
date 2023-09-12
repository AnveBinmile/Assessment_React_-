import { NavMain, NavHead } from './Components';
import { useAppSelector } from '../../redux/hooks';


const ComponentNavbar: React.FC = () => {
  const showNav = useAppSelector((state) => state.ShowNavBar.showNav);

  return (
    <div
      className={` ${
        showNav ? 'visible' : 'invisible'
      // eslint-disable-next-line max-len
      } sm:visible componentNavbar z-50 shadow-2xl shadow-purple-400 py-[40px] sm:w-[23%] w-[80%] md:bg-greyBlack bg-black opacity-90  sm:min-w-[230px] sm:max-w-[300px] h-[100vh] fixed z-{30} flex flex-col justify-start gap-[100px] p-[20px]`}
    >
      <NavHead />
      <NavMain />
    </div>
  );
};

export default ComponentNavbar;
