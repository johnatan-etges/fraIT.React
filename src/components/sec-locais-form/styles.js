import styled from 'styled-components';

export const StyledForm = styled.aside`
  margin: 6.25rem 0 0 5rem;
  padding: 1.25rem;
  width: 30%;
  box-sizing: border-box; 

  .separador {
    width: 100%;
    height: 30px;
  }

  form {
      background-color: white;
      display: flex;
      flex-direction: column;
      max-width: 100%;

      header {
        
        strong {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.primaryLight};
        }
      }

      .input-block {       
        margin: 0;          
      }      

      .input-block + .input-block {
        margin-top: 1.25rem;
      }

      .input-group {
        margin-top: 1.25rem;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
      }

      .input-group .input-block {
            margin-top: 0;
            margin-bottom: 1.25rem;
      }      

      footer {

        display: flex;
        flex-direction: column;
        align-items: center;

        .success-message {
          font-size: 1.2rem;
          color: ${({ theme }) => theme.primarySuccess};
        }

        .error-message{
          font-size: 1.2rem;
          color: ${({ theme }) => theme.primaryError};          
        }

        button {
          height: 2rem;
          width: 100%;
          background-color: ${({ theme }) => theme.primaryLight};
          color: ${({ theme }) => theme.primaryDark};
          margin: 0.5rem 0;
        }
      }
  }
`;
