import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 40%;
  
  display: flex;
  justify-content: space-between;
  margin: 4vh auto auto 50%;

  @media(max-width: ${({theme}) => theme.medium}) {
    margin: 2.5vh auto auto 50%;
  }
`;
