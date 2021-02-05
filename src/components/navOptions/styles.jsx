import styled, { keyframes } from 'styled-components';

const drop = keyframes`
    from {      
      opacity: 0;
      top: -50px;
    }
    to {      
      opacity: 1;
      top: 8vh;
    }
  `;

  const slide = keyframes`
    from {
      opacity: 0;
      /* width: 100px; */
      /* left: 90vw; */
      left: 90%;
    }    
    to {
      opacity: 1;
      /* width: 250px; */
      /* left: 85vw; */
      left: 85%;
    }

  `;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 15vw;  

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 20vw;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 5px;
    
    .user-name {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({theme}) => theme.contrast};
      @media (max-width: ${({theme}) => theme.large}){      
        display: none;
      }      
    } 

    position: relative;  
  }

  .profile-pic {
    background-color: ${({theme}) => theme.secundary};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    filter: drop-shadow(2px 2px ${({theme}) => theme.shadow});
    @media (max-width: ${({theme}) => theme.medium}){      
      display: none;
    }
  }

  .dropdown-menu {
    position: absolute;

    display: flex;
    flex-direction: column;
    width: 250px;
    overflow: hidden;

    background-color: ${({theme}) => theme.primary};
    border-radius: 5px;
    top: 8vh;
    transform: translateX(-.5vw);  

    animation: ${drop} .2s ease-in;
    
  }

  .dropdown-menu-item {
    display: flex;    
    justify-content: space-between;
    align-items: center;

    color: ${({theme}) => theme.contrast};
    text-decoration: none;
    font-size: 2vh;
    font-weight: bold;

    width: 100%;
    height: 3vh;
    padding: 1vw;

    transition: .2s linear;

    &:hover {
      background-color: ${({theme}) => theme.secundary};
      color: ${({theme}) => theme.hover};
      filter: brightness(1.1);
    }
  }

  .dropdown-menu-item-icon {
    width: 1vh;
    height: 1vh;
    fill: ${({theme}) => theme.contrast};
  }

  .slide-menu {
    position: absolute;

    display: flex;
    flex-direction: column;

    width: 250px;
    transform: translateY(8vh) translateX(-.5vw);

    background-color: ${({theme}) => theme.primary};
    

    overflow: hidden;

    animation: ${slide} .2s ease-in;
  }

  .slide-menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;
    font-size: 2vh;
    font-weight: bold;
    color: ${({theme}) => theme.contrast};

    width: 100%;
    height: 3vh;
    padding: 1vh;

    &:hover {
      cursor: pointer;
      background-color: ${({theme}) => theme.secundary};
      color: ${({theme}) => theme.hover};
      filter: brightness(1.1);
    }
  }
`;
