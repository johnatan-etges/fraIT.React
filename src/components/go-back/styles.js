import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

    span {
      font-size: 2rem;
      padding: 10px;
      color: ${({theme}) => theme.contrast};

      &:hover {
        cursor: pointer;
      }
    }   
`;
