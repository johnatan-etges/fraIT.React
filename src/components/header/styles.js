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

  background-color: ${({theme}) => theme.primary};
  filter: drop-shadow(0 .2vh .5vh ${({theme}) => theme.shadow});

  .title {
    margin-left: 5%;
  }

  @media (max-width: ${({theme}) => theme.narrow}){
    .title {
      font-size: 1rem;
      margin-left: 20%;
    }
  } 

`;