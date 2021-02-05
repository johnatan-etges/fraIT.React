import styled from 'styled-components';

export const Container = styled.div`

  width: 35vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: 85px auto -7vw;

  box-sizing: border-box;
  overflow: hidden;

  padding: 1vh 1vw;

  border-top: 1px solid ${({theme}) => theme.secundary};
  border-left: 1px solid ${({theme}) => theme.secundary};

  background-color: ${({theme}) => theme.primary};
  filter: drop-shadow(2px 0 2px ${({theme}) => theme.shadow});

  @media (max-width: ${({theme}) => theme.tablet}) {
    width: 89vw;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 95vw;
  }
`;
