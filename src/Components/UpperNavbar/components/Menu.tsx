import NavBarIcon from '../../ComponentCollection/NavBarIcon';

const Menu = () => {
  return (
    <div>
      <NavBarIcon/>
      <ul className="menu hidden items-center h-[100px] sm:flex flex-row gap-[20px]">
        <li>Movies</li>
        <li>Series</li>
        <li>Documentaries</li>
      </ul>
    </div>
  )
}

export default Menu