import React from 'react';

import { Container } from './styles';

export function RegisterInsertion(props) {

  return (
      <Container>
        <svg
          width={`${props.width}px`}
          height={`${props.width}px`}
          viewBox="0 0 500 500"          
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle"
            cx="250"
            cy="250"
            r="250"            
          />
          <line
            className="line"
            x1="250"
            x2="250"
            y1="84"
            y2="416"
            stroke-width="40"
          />
          <line
            className="line"
            x1="84"
            x2="416"
            y1="250"
            y2="250"
            stroke-width="40"/>          
        </svg>
        <span className={"insert-text"}>Inserir Registro</span>
      </Container>
  );
}