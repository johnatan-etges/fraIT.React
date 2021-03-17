import React from 'react';

import { Container } from './styles';

function OptionsBox(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default OptionsBox;