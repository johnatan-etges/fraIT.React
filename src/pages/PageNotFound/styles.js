import styled from 'styled-components';

export const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: auto;
    margin-bottom: 10px;
    font-size: 1000%;
  }  

  span {
    margin-bottom: 10px;
    font-size: 180%;
  }

  a {
    text-decoration: none;
    margin-bottom: auto;
    font-size: 250%;
    color: ${({theme}) => theme.contrast};
  }
`;
