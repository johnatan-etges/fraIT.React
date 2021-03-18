import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  span {
    padding: 10px;
    color: ${({theme}) => theme.contrast};

    &:hover {
      cursor: pointer;
    }
  }

  .icon {
    font-size: 1.5rem;
    margin-right: -10px;
  }

  .text {
    font-size: 1rem;
  }  
`;
