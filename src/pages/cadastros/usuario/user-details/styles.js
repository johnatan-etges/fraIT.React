import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .info-header {
      width: 100%;
      height: auto;
      max-height: 150px;
      
      display: flex;
      flex-direction: column;

      border-bottom: 1px solid white;

      span {
        padding: 10px;
      }

      .header-title {        
        font-size: 4rem;
      }

      .header-subtitle {
        font-size: 2rem;
      }
      
    }
`;
