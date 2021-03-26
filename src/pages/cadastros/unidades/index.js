import React from 'react';

import Header from '../../../components/header';
import BodyCard from '../../../components/BodyCard';
import BodyGrid from '../../../components/BodyGrid';
import Footer from '../../../components/footer';
import GridRow from '../../../components/GridRow';
import GridColumn from '../../../components/GridColumn';

function UnidadesAdministrativas() {
  return (
      <>
        <Header/>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <GridRow>
                        <GridColumn grid={'2'}>Nome</GridColumn>
                        <GridColumn grid={'1.5'}>Entidade</GridColumn>                        
                        <GridColumn grid={'1'}>Telefone</GridColumn>
                        <GridColumn grid={'1'}>IP</GridColumn>
                        <GridColumn grid={'0.5'}>Ativo</GridColumn>
                        <GridColumn grid={'0.5'}>Ação</GridColumn>
                        <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                    </GridRow>
                    
                </BodyGrid>
            ):
            ( 
            
                <BodyCard>
                    
                </BodyCard>
            )
        }
        <Footer/>
      </>
  )
}

export default UnidadesAdministrativas;