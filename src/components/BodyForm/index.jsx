import React from 'react';
import PerfectScrollBar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

import { Container } from './styles';

function Body(props) {
  return (
      <Container>
        <PerfectScrollBar
          style={{width: '100%'}}
        >
        {props.children}
      </PerfectScrollBar>
      </Container> 
  );
}

export default Body;