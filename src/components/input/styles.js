import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width || "100%"};
  display: flex;
  flex-direction: column;
  margin: .9375rem 0;
  
  //postion needs to be relative to accept label float on it
  position: relative;
  transition: all .2s ease;

  &:first-child{
    margin-right: 1rem;
  }

  & > input {    
    background-color: transparent;
    outline: none;
    padding: .75rem 1.5rem .75rem 1.5rem;
    font-size: 1rem;
    color: ${({theme}) => theme.contrast};
    caret-color: ${({theme}) => theme.contrast};
    transition: all .2s ease;
    z-index: 500;
    width: 100%;
    border-radius: 10px;

    border: 1px solid ${({theme}) => theme.contrast};
    //makes border red if required no attended
    ${props => !props.valid && `
      border: 2px solid red;
    `}

    ::placeholder {
      color: ${({theme}) => theme.contrast};
    }

    ::selection {
      background-color: ${({theme}) => theme.special};
    }    
  }
  
  & > label {
    color: ${({theme}) => theme.contrast};
    position: absolute;
    font-size: 1rem;
    font-weight: 800;
    top: .5rem;
    transition: all .2s ease;
    margin-left: 1rem;
    background-color: ${({theme}) => theme.primary};

    ${props => props.focused && `
      font-size: .9rem;
      transform: translate(0, -1.2rem);
      z-index: 501;
      padding: 0 .1rem 0 .1rem;
    `}
  }
`;
