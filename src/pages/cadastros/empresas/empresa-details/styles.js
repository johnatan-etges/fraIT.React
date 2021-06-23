import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-size: 1.5rem;
    color: ${({theme}) => theme.contrast};
    margin: 10px auto;
  }

  span {
        padding: 10px;
    }

  .card-section-title {
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .card {
      width: 100%;
      height: auto;
      max-height: 250px;
      
      display: flex;
      flex-direction: column;

      border-bottom: 1px solid white;      

      .card-item-box {
        width: auto;
        //max-width: 40%;
        display: flex;
        flex-direction: column;

        .card-item-box-label {
          font-size: .8rem;
          font-weight: 400;
          color: ${({theme}) => theme.contrast};
          opacity: 0.5;

          margin-bottom: -20px;
        }
      }

      .card-header-title {        
        font-size: 2.5rem;
        font-weight: 500;
      }

      .card-header-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
      }

      .card-body-text-item {
        font-size: 1rem;
        font-weight: 400;
      }   

      .card-box-row {
        display: flex;
        flex-wrap: wrap;
      }

    }

    .footer {
      width: 100%;
      height: auto;
      max-height: 250px;
      
      display: flex;
      flex-direction: column;

      margin-top: 20px;
    }
`;
