import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  filter: drop-shadow(.1vw .2vh .1vw ${({theme}) => theme.shadow});

  perspective: 1000px;

  overflow: hidden;

  @media (max-width: ${({theme}) => theme.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
