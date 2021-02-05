import React from 'react';

import { Container } from './styles';

function OptionsBoxItem(props) {
  return (
    <Container>
      <span className={'optionName'}>{props.name}</span>
    </Container>
  );
}

export default OptionsBoxItem;