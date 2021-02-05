import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  margin: .9375rem 0;
  position: relative;
  transition: all .2s ease;

  & > input {
    border: 1px solid ${({theme}) => theme.contrast};
    background-color: transparent;
    outline: none;
    padding: .75rem 0 .75rem 1.5rem;
    font-size: 1rem;
    color: ${({theme}) => theme.contrast};
    caret-color: ${({theme}) => theme.contrast};
    transition: all .2s ease;
    z-index: 500;
    width: 100%;
    border-radius: 10px;

    ::placeholder {
      color: ${({theme}) => theme.contrast};
    }

    ::selection {
      background-color: ${({theme}) => theme.contrast};
    }    
  }
  
  & > label {
    color: ${({theme}) => theme.contrast};
    position: absolute;
    font-size: 1rem;
    font-weight: 800;
    top: .5rem;
    transition: all .2s ease;
    margin-left: .5rem;
    background-color: ${({theme}) => theme.primary};

    ${props => props.focused && `
      font-size: .9rem;
      transform: translate(-1.1rem, -1.2rem);
      z-index: 501;
      padding: 0 .5rem;
    `}
  }
`;
