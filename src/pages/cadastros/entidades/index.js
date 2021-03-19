import React from 'react';

import Header from '../../../components/header';
import BodyCard from '../../../components/BodyCard';
import BodyGrid from '../../../components/BodyGrid';
import Footer from '../../../components/footer';

import { Container } from './styles';

function Entidades() {    
    
    return (
        <>
        <Header/>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <Container/>
                </BodyGrid>
            ):
            ( 
            
                <BodyCard>
                    <Container/>
                </BodyCard>
            )
        }
        <Footer/>
      </>
    )
}

export default Entidades;