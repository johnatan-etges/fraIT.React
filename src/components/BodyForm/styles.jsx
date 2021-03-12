import styled from 'styled-components';

export const Container = styled.div`

  width: 35vw;
  height: 100vh;

  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  margin: 85px auto -6.5vw;

  box-sizing: border-box;

  padding: 1vh 1vw;

  background-color: ${({theme}) => theme.BODY_CARD_BACKGROUND};
  filter: drop-shadow(0 0 2px ${({theme}) => theme.shadow});

  .flex-row {
    display: flex;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({theme}) => theme.tablet}) {
    width: 89vw;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 95vw;
  }
`;
