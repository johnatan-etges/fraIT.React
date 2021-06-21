import React from 'react';

import { Container } from './styles';

function PageNotFound() {
  return (
      <>
        <Container>        
          <h1>404</h1>
          <span>Recurso não encontrado</span>
          <a href="/">Voltar</a>     
        </Container>      
      </>
  )
}

export default PageNotFound;