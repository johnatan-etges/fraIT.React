import styled from 'styled-components';

export const Container = styled.div`

  .notify {
    
    path {
      fill: ${({theme}) => theme.contrast};
    }

    ellipse {
      fill: ${({theme}) => theme.special};
    }
  }

  .lupa {
    path {
      stroke: ${({theme}) => theme.contrast};
    }
    
    circle {
      fill: ${({theme}) => theme.primary};
    }
  }

  .expander {
    fill: ${({theme}) => theme.contrast};
  }

  
`;
