import styled from 'styled-components';

export const StyledSearch = styled.form`

  display: flex;
  flex-direction: column;
  max-width: 100%;

  .input-group .input-block {
    margin-top: 0;
    margin-bottom: 1.25rem;
  }

  .search-label {
    /* margin-top: 1rem; */
    color: ${({ theme }) => theme.primaryLight};
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  .search-input {
    background-color: ${({ theme }) => theme.primaryDark};
    width: 100%;
    height: 2rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.primaryLight};
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLight};
    //margin-top: 1rem;          
  } 
  
`;
