import React, { useContext, useState } from 'react';
import { AuthContext } from '../../hooks/authContext';

import ThemeSwitcher from '../themeSwitcher';
import { Expander, NotificationBell, Lupa } from '../svg/header';
import { Container } from './styles';
import ViewSwitcher from '../ViewSwitcher';

function NavOptions() {

  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);

  const { state } = useContext(AuthContext);  
  const user = state.user;

  const { dispatch } = useContext(AuthContext); 

  async function handleLogout(e) {
    e.preventDefault();
    dispatch({
      type: "@LOGOUT",
    });    
  }

  function handleSlide(e) {
    e.preventDefault();
    setSlide(true);
    setOpen(false);
  }

  function handleDropDown(e) {
    e.preventDefault(); 
    if (slide) {
      setSlide(false);
      setOpen(false);
    } else {
      setOpen(!open);
    }
    
  }
  
  return (
    <Container>
      <ViewSwitcher/>
      <ThemeSwitcher/>
      <Lupa width={25}/>
      <NotificationBell width={25}/>
      <a
        href={'/'}
        onClick={handleDropDown}
      >
        <div className={"container"}>          
          <span className="user-name">{user?.name}</span>
          <Expander width={20}/>          
        </div>        
      </a>
      {open && (
          <div className={"dropdown-menu"}>
            <a
              href={'/signin'}
              onClick={handleLogout}
            > 
              <div className={'dropdown-menu-item'}>                         
                <span className={'dropdown-menu-item-icon'} role={'img'} aria-label={'disabled'}>
                  ❌
                </span>
                <span className={'dropdown-menu-item-text'}>
                  Logout
                </span>            
              </div>
            </a>
            <a
              href={'/'}
              onClick={handleSlide}          
            >
              <div className={'dropdown-menu-item'}>             
                <span className={'dropdown-menu-item-icon'} role={'img'} aria-label={'disabled'}>
                  ❌
                </span>
                <span className={'dropdown-menu-item-text'}>
                  Configurações
                </span>
              </div>
            </a>
          </div>
        )}
        {slide && (
          <div
            className={'slide-menu'}
          >
            <div
              className={'slide-menu-item'}
            >
              <span
                className={'slide-menu-item-text'}
              >
                {localStorage.getItem('@fraIT/mode')==='dark' ?
                (
                  'Modo Claro'
                ) :
                (
                  'Modo Escuro'
                )}
              </span> 
              <span
                className={'slide-menu-item-icon'}
              >
                <ThemeSwitcher/>
              </span>        
            </div>
            <div
              className={'slide-menu-item'}
            >
              <span
              className={'slide-menu-item-icon'}
              role={'img'}
              aria-label={'disabled'}
              >
                ❌
              </span>
              <span
                className={'slide-menu-item-text'}
              >
                Teste 1
              </span>           
            </div>
            <div
              className={'slide-menu-item'}
            >
              <span
              className={'slide-menu-item-icon'}
              role={'img'}
              aria-label={'disabled'}
              >
                ❌
              </span>
              <span
                className={'slide-menu-item-text'}
              >
                Teste 1
              </span>           
            </div>
          </div>
        )}
      <div className="profile-pic"/>
    </Container>
  );
}

export default NavOptions;