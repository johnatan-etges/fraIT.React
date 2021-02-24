import React, { useState } from 'react';

import { Container } from './styles';
import NavBar from '../navBar';
import NavOptions from '../navOptions';
import Sidebar from '../../components/sidebar';
import Burger from '../../components/burger';


function Header({title, title_full}) {  

  const [open, setOpen] = useState(false);  
  const sideBarId = "main-menu";
  const menuItems = [
    {
      target: '#',
      open: open,
      icon: '💻',
      linkName: 'Help Desk',
      menuItem: [
        {
          target: '/dashboard',
          open: open,
          icon: '💻',
          linkName: 'Tickets TI',
        },
        {
          target: '#',
          open: open,
          icon: '🔧',
          linkName: 'Assist. externa',
        },
      ]
    },      
    {
      target: '#',
      open: open,
      icon: '📱',
      linkName: 'Telefonia',
      menuItem: [
        {
          target: '#',
          open: open,
          icon: '📱',
          linkName: 'Celulares',
        },
        {
          target: '#',
          open: open,
          icon: '📱',
          linkName: 'Fixos',
        }
      ]
    },
    {
      target: '#',
      open: open,
      icon: '🗄️',
      linkName: 'Cadastros',
      menuItem: [
        {
          target: '/cadastros/usuario',
          open: open,
          icon: '👥',
          linkName: 'Usuários',
        },
        {
          target: '/cadastros/secretarias-locais',
          open: open,
          icon: '🏛️',
          linkName: 'Secretarias e locais',
        }
      ]
    },
    {
      target: '#',
      open: open,
      icon: '📃',
      linkName: 'Relatórios',
      menuItem: [
        {
          target: '#',
          open: open,
          icon: '📃',
          linkName: 'Top users',
        },
      ]
    },
    {
      target: '/dashboard',
      open: open,
      icon: '⚙️',
      linkName: 'Configurações',
    },
  ];
  
  return (   
      <Container>
        <Burger open={open} setOpen={setOpen} aria-controls={sideBarId}/>
        <Sidebar open={open} setOpen={setOpen} id={sideBarId} menuItems={menuItems}/>
        <div className="title_resumido">
          <h1>{title}</h1>
        </div>
        <div className="title_completo">
          <h1>{title_full}</h1>
        </div>
        <NavOptions />
      </Container>
  );
};

export default Header;