import React from 'react';

import { StyledNavItem } from './styles';

function NavItem({item}) { 
  return (
    <StyledNavItem href={item.href}>
        <span className="item-name">{item.name}</span>
        <div role="img" className="item-icon">{item.img}</div>
    </StyledNavItem>    
  );
}

export default NavItem;