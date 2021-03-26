import styled from 'styled-components';

export const Container = styled.div`

  width: 35vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  margin: 85px auto -3.5vh;

  box-sizing: border-box;
  overflow: hidden;

  padding: 1vh 1vw;

  background-color: ${({theme}) => theme.BODY_CARD_BACKGROUND};
  filter: drop-shadow(0 0 2px ${({theme}) => theme.shadow});

  @media (max-width: ${({theme}) => theme.tablet}) {
    width: 89vw;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 95vw;
  }
`;
