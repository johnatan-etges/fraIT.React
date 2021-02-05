import React, { useState, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { primary, secundary, contrast, special, shadow, sizes, hover, logoIT} from '../styles/themes';

const ThemeToggleContext = createContext({});

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({
    mode: localStorage.getItem('@fraIT/mode') || 'light',
    viewMode: localStorage.getItem('fraIT/viewMode') || 'grid',
  });

  const Wrapper = styled.div`
    background-color: ${primary};
    color: ${contrast};
    width: 100vw;
    height: 100vh;    
  `;

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? 'dark' : 'light');
    localStorage.setItem('@fraIT/mode', mode);
    const viewMode = (themeState.viewMode === 'grid' ? 'card' : 'grid');
    localStorage.setItem('@fraIT/viewMode', viewMode);
    setThemeState({mode: mode});
  };

  return (
    <ThemeToggleContext.Provider
    value={{toggle: toggle}}
    >
      <ThemeProvider
        theme={{
          viewMode: themeState.viewMode,
          mode: themeState.mode,
          primary: primary,
          secundary: secundary,
          contrast: contrast,
          special: special,
          shadow: shadow,
          hover: hover,
          logoIT: logoIT,
          fhd: sizes.fhd,
          large: sizes.large,
          medium: sizes.medium,
          narrow: sizes.narrow,
          tablet: sizes.tablet,
          mobile: sizes.mobile,
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;