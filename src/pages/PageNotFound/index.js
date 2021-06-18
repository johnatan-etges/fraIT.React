import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

import { Container } from './styles';

function PageNotFound() {
  return (
      <>
      <Header/>
      <Container>        
        <h1>404</h1>
        <span>Recurso não encontrado</span>
        <a href="/">Voltar</a>     
      </Container>
      <Footer/>
      
      </>
  )
}

export default PageNotFound;