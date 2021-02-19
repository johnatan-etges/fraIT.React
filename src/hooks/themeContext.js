import React, { useState, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { HEADER_BACKGROUND, BODY_CARD_BACKGROUND, CARD_BACKGROUND, CARD_TITLE, CARD_SUBTITLE, CARD_PARAGRAPH, CARD_BORDER, CARD_BORDER_HOVER, CARD_HEADER_BORDER, CARD_HEADER_BORDER_HOVER, CARD_BORDER_SHADOW, CARD_OPACITY, CARD_BORDER_SHADOW_SIZES, secundary, contrast, special, shadow, sizes, hover, logoIT} from '../styles/themes';

//import { HEADER_BACKGROUND, BODY_CARD_BACKGROUND, CARD_BACKGROUND, CARD_TITLE, CARD_SUBTITLE, CARD_PARAGRAPH, CARD_BORDER, CARD_BORDER_HOVER, CARD_HEADER_BORDER, CARD_HEADER_BORDER_HOVER, CARD_BORDER_SHADOW, } from '../styles/themes';
const ThemeToggleContext = createContext({});

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({
    mode: localStorage.getItem('@fraIT/mode') || 'light',
  });

  const Wrapper = styled.div`
    background-color: ${HEADER_BACKGROUND};
    color: ${contrast};
    width: 100vw;
    height: 100vh;    
  `;

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? 'dark' : 'light');
    localStorage.setItem('@fraIT/mode', mode);    
    setThemeState({mode: mode});
  };

  return (
    <ThemeToggleContext.Provider
    value={{toggle: toggle}}
    >
      <ThemeProvider
        theme={{
          mode: themeState.mode,
          HEADER_BACKGROUND: HEADER_BACKGROUND,
          BODY_CARD_BACKGROUND: BODY_CARD_BACKGROUND,
          CARD_BACKGROUND: CARD_BACKGROUND,
          CARD_TITLE: CARD_TITLE,
          CARD_SUBTITLE: CARD_SUBTITLE,
          CARD_PARAGRAPH: CARD_PARAGRAPH,
          CARD_BORDER: CARD_BORDER,
          CARD_BORDER_HOVER: CARD_BORDER_HOVER,
          CARD_HEADER_BORDER: CARD_HEADER_BORDER,
          CARD_HEADER_BORDER_HOVER: CARD_HEADER_BORDER_HOVER,
          CARD_BORDER_SHADOW: CARD_BORDER_SHADOW,
          CARD_OPACITY: CARD_OPACITY,
          CARD_BORDER_SHADOW_SIZES, CARD_BORDER_SHADOW_SIZES,
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