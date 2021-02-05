import styled from 'styled-components';

export const StyledCard = styled.li`
  
  header {
    display: flex;
    flex-direction: column;
  }
  
  header strong {
    font-size: 3rem;
    color: ${({ theme }) => theme.primaryLight};
  }

  header span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryLight};
  }
  
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.primaryLight};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.primaryLight};
  }

  button {
    cursor: pointer;       
    margin: 0 0 0 1rem;  
    background-color: transparent;
    color: ${({ theme }) => theme.primaryLight};
    border: 0;
  }
`;
