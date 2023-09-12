import { useAppDispatch} from '../../../redux/hooks';
import { setShowNav } from '../../../redux/slices/NavbarSlice';




const NavBarIcon = () => {


  const dispatch = useAppDispatch();



  return (
    <div
      onClick={()=>dispatch(setShowNav())}
      className="px-[5px] absolute z-70 sm:hidden"
    >
      <i className="fa fa-bars" style={{ fontSize: '24px' }}></i>
    </div>
  );
};

export default NavBarIcon;
