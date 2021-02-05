import React from 'react';

import NavItem from '../navItem';

import { Container } from './styles';

function NavBar() {

  const items = [
    {
      name: 'Usuários',
      href: '/cadastros/usuario'
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3',
    },
    {
      name: 'Item 4',
    },
    {
      name: 'Item 5',
    },
  ]
  return (
    <Container>
      {items.map (item => 
        <NavItem item={item}/>
      )}           
    </Container>
  );
}

export default NavBar;