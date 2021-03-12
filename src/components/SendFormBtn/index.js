import React from 'react';

import { Container } from './styles';

function SendFormBtn({text, width, onClick}) {
  return (
    <Container width={width}>
        <button
            onClick={onClick}>
        {text}
        </button>
    </Container>      
  );
}

export default SendFormBtn;

SendFormBtn.defatultProps = {
    onClick: () => {}
}