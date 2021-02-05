import React from 'react';

import { useTheme } from '../../hooks/themeContext';
import { SunSVG, MoonSVG } from '../svg/themeIcons';
import { StyledButton } from './styles';

function ThemeSwitcher(){

  const themeToggle = useTheme();

  return (
    <StyledButton onClick={() => themeToggle.toggle()}>
      {localStorage.getItem('@fraIT/mode') === 'dark'
      ?
      <SunSVG width={25} height={25}/>
      :
      <MoonSVG width={25} height={25}/>
      }
    </StyledButton>
  );
}

export default ThemeSwitcher;