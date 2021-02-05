import React from 'react';

import { Container } from './styles';

function ContentContainer(props) {
  return (
    <Container>
      {props.children}      
    </Container>
  );
}

export default ContentContainer;