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
                        <GridColumn grid={'1.8'}>Nome</GridColumn>
                        <GridColumn grid={'1.5'}>Entidade</GridColumn>                        
                        <GridColumn grid={'0.8'}>Telefone</GridColumn>
                        <GridColumn grid={'0.8'}>IP</GridColumn>
                        <GridColumn grid={'0.8'}>Responsável</GridColumn>
                        <GridColumn grid={'0.5'}>Ação</GridColumn>
                        <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn grid={'1.8'}>Escola Antonio Porto Burda</GridColumn>
                        <GridColumn grid={'1.5'}>Secretaria de Educação, Cultura e Esportes</GridColumn>                        
                        <GridColumn grid={'0.8'}>3256-4287</GridColumn>
                        <GridColumn grid={'0.8'}>187.102.14.74</GridColumn>
                        <GridColumn grid={'0.8'}>Helena Frigoto</GridColumn>
                        <GridColumn grid={'0.5'}>Desativar</GridColumn>
                        <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn grid={'1.8'}>Órgão Executivo de Trânsito de Fraiburgo - ORTFRAI</GridColumn>
                        <GridColumn grid={'1.5'}>Secretaria de Infraestrutura Urbana e Rural</GridColumn>                        
                        <GridColumn grid={'0.8'}>3256-3074</GridColumn>
                        <GridColumn grid={'0.8'}>187.102.14.88</GridColumn>
                        <GridColumn grid={'0.8'}>Valdecir Cordeiro</GridColumn>
                        <GridColumn grid={'0.5'}>Desativar</GridColumn>
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