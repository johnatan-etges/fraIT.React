import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.primaryDark};
    height: 100%;
    display: flex;

    main {
    max-width: 100%;  
    margin: 7rem 0 0 10rem;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    box-sizing: border-box;
    overflow: auto;
    
    ul {      
      width: 100%;
      display: grid;      
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
  }  
  
`;
