import React from 'react';

import { Container } from './styles';
import OptionsBox from '../optionsBox';

function ContentCard(props) {
  return (
    <Container>
      {props.children}
      <OptionsBox/>  
    </Container>
    
  );
}

export default ContentCard;