import React from 'react';

import Header from '../../../components/header'
import BodyGrid from '../../../components/BodyGrid'
import BodyCard from '../../../components/BodyCard'
import AddNewItemGrid from '../../../components/addNewItemGrid'
import AddNewItemCard from '../../../components/addNewItemCard'
import GridRow from '../../../components/GridRow';
import GridColumn from '../../../components/GridColumn';
import ContentCard from '../../../components/ContentCard';
import Footer from '../../../components/footer';

// import { Container } from './styles';

function Empresas() {
  return (
      <>
        <Header title={"Empresas cadastradas"} title_full={"Empresas cadastradas no sistema"}/>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <AddNewItemGrid pathname={"/cadastros/empresas/novo"} description={"Nova empresa"} payload={{valid: false}}/>
                    <GridRow>
                        <GridColumn grid='2'>Nome</GridColumn>
                        <GridColumn grid='1.5'>CNPJ</GridColumn>
                        <GridColumn grid='1.5'>Tipo</GridColumn>
                        <GridColumn grid='1'>Ação</GridColumn>
                        <GridColumn grid='1'></GridColumn>                    
                    </GridRow>
                </BodyGrid>
            )
            :
            (
                <BodyCard>
                    <AddNewItemCard pathname={"/cadastros/empresas/novo"} description={"Nova empresa"} payload={{valid: false}}/>
                    <ContentCard>
                        <div className={"cardHeader"}>
                            <h3 className={"titulo"}>Nome</h3>
                            <span className={"subtitulo"}>CNPJ</span>
                        </div>
                        <p className={"paragrafo"}>Tipo</p>
                    </ContentCard>
                </BodyCard>
            )
        }
        <Footer/>
      </>
  )
}

export default Empresas;