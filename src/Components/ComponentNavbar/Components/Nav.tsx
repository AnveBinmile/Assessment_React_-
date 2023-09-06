import React from 'react';
import { MenuItem } from './index';
import { NavItemPropsArray,NavItemProps } from '../utils/types/type';

const Nav: React.FC<NavItemPropsArray> = ({ menuItems }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      {menuItems.map((item: NavItemProps) => {
        return <MenuItem img={item.img} text={item.text} path={item.path} />;
      })}
    </div>
  );
};

export default Nav;
