import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  height: 85px;
  padding: 15px 2rem 15px 0;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 1001;

  display: flex;

  background-color: ${({theme}) => theme.HEADER_BACKGROUND};
  filter: drop-shadow(0 .2vh .5vh ${({theme}) => theme.shadow});

  .title {
    /* margin-left: 5%; */

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${({theme}) => theme.medium}){
    .title h1 {
      font-size: 2rem;  
    }
  } 

  @media (max-width: ${({theme}) => theme.tablet}){
    .title h1 {
      font-size: 1.5rem;  
    }
  }

  @media (max-width: ${({theme}) => theme.mobile}){
    .title h1 {
      font-size: 1rem;  
    }
  } 

`;