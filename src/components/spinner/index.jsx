import React from 'react';

import { Container } from './styles';

function Spinner() {
  return (
      <Container>
        <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        </div>
      </Container>

  );
}

export default Spinner;