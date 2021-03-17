import React from 'react';
import { bool } from 'prop-types';

import { StyledSideBar } from './styles';
import MenuItem from '../sideBarMenuItem';

const Sidebar = ({open, menuItems, ...props}) => {

  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (      
      <StyledSideBar open={open} aria-hidden={!isHidden} {...props}>       
        {menuItems.map(menuItem => (
          (menuItem.linkName === 'Configurações') ?
            <>
              <div className="separator"/>
              <MenuItem key={menuItem.id} {...menuItem} depth={0} depthStep={2}/>              
            </>
          :
            <MenuItem key={menuItem.id} {...menuItem} depth={0} depthStep={2}/>
        ))} 
      </StyledSideBar>
  )
}

Sidebar.propTypes = {
  open: bool.isRequired,
}

export default Sidebar;