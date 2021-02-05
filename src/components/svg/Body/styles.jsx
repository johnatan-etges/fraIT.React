import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  right: 10px;
  bottom: 10px;

  padding: 1vh 1vw;    
  
  .circle {
    fill: ${({theme}) => theme.special};        
  }

  .line {
    stroke: ${({theme}) => theme.primary};    
  }

  .insert-text {
    font-size: 3vh;
    margin-left: 1vw;
    color: ${({theme}) => theme.contrast};
  }
`;
