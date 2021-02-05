import styled from 'styled-components';

export const Container = styled.nav`
  height: 60px;
  width: 100vw;
  margin: 0 auto;
  padding: 0 .5vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: ${({theme}) => theme.secundary};
  filter: drop-shadow(0 .2vh .3vh ${( {theme} ) => theme.shadow });
  border-radius: 5px;

  @media (max-width: ${({theme}) => theme.mobile}){
      display: none;
  }
`;
