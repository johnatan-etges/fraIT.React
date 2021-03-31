import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: 80px auto -13vh;

  box-sizing: border-box;
  overflow: hidden;

  padding: 30px;

  @media (max-width: ${({theme}) => theme.narrow}) {
    font-size: 1rem;
  }

  @media (max-width: ${({theme}) => theme.tablet}) {
    /* width: 89vw; */
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 95vw;
  }
`;
