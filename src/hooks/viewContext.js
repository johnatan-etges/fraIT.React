import React, { useState, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ViewToggleContext = createContext({});

export const useView = () => useContext(ViewToggleContext);

export const MyViewProvider = ({ children }) => {

  const [viewState, setViewState] = useState({
    viewMode: localStorage.getItem('@fraIT/viewMode') || 'grid',
  });

  const Wrapper = styled.div`
       
  `;

  const toggle = () => {
    const viewMode = (viewState.viewMode === 'grid' ? 'card' : 'grid');
    localStorage.setItem('@fraIT/viewMode', viewMode);    
    setViewState({viewMode: viewMode});
  };

  return (
    <ViewToggleContext.Provider
    value={{toggle: toggle}}
    >
      <ThemeProvider
        theme={{
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ViewToggleContext.Provider>
  );
};

export default MyViewProvider;