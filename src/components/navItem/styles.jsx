import styled from 'styled-components';

export const StyledNavItem = styled.a`

  display: block;
  padding: 15px 1vw;
  font-size: 1.5rem;
  text-decoration: none;  
  transition: 0.5s ease;

  &:hover {    
    cursor: pointer;
    font-size: 1.8rem;
    padding: 0.1vh 2vw;
    filter: brightness(1.5);
  }

  .item-name {
    font-weight: bold;
    color: ${({theme}) => theme.contrast};

    @media (max-width: ${({theme}) => theme.tablet}){      
      display: none;
    }
  }

  .item-icon {
    display: none;
    background-color: ${({theme}) => theme.contrast};
      height: 3vw;
      width: 3vh;
      border-radius: 4px;

    @media (max-width: ${({theme}) => theme.tablet}){ 
      display: block;  
    }

  }
  
`;
