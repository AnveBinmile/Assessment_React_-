// import React from 'react'
import Nav from './Nav';
import {menuItems_2,menuItems_1,menuItems_3 } from '../../utils/constants/DummyData';


const NavMain = () => {
  return (
    <div className='navmain flex flex-col justify-between h-[70%]'>
        <Nav menuItems={menuItems_1}/>
        <Nav menuItems={menuItems_2}/>
        <Nav menuItems={menuItems_3}/>
    </div>
  )
}

export default NavMain