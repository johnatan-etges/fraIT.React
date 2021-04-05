import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Header from '../../../components/header'
import BodyCard from '../../../components/BodyCard'
import BodyGrid from '../../../components/BodyGrid'
import Footer from '../../../components/footer'
import GridRow from '../../../components/GridRow'
import GridColumn from '../../../components/GridColumn'
import ContentCard from '../../../components/ContentCard'
import AddNewItemCard from '../../../components/addNewItemCard'
import AddNewItemGrid from '../../../components/addNewItemGrid'
import EditItem from '../../../components/editItem'

function UnidadesAdministrativas(){

    const [unidades, setUnidades] = useState([])

    useEffect(() => {
        loadUnidades()
    },[])

    async function loadUnidades(){
        await api.get('/cadastros/unidades/index')
        .then((response) => setUnidades(response.data)/* console.log(response.data) */)
        .catch(() => toast.error("Ocorreu um erro ao carregar as unidades!"))
    }

  return (
      <>
        <Header/>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <AddNewItemGrid
                        description="Nova unidade"
                        pathname="/cadastros/unidades/novo"
                        payload={{valid: false}}
                    />
                    <GridRow>
                        <GridColumn grid={'1.8'}>Nome</GridColumn>
                        <GridColumn grid={'1.5'}>Entidade</GridColumn>                        
                        <GridColumn grid={'0.8'}>Telefone</GridColumn>
                        <GridColumn grid={'0.8'}>IP</GridColumn>
                        <GridColumn grid={'0.8'}>Responsável</GridColumn>
                        <GridColumn grid={'0.5'}>Ação</GridColumn>
                        <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                    </GridRow>
                    {unidades.map(unidade => 
                        <GridRow key={Math.random(unidade.id)*Math.random()}>
                            <GridColumn grid={'1.8'}>{unidade.name}</GridColumn>
                            <GridColumn grid={'1.5'}>{unidade.Entidade.name}</GridColumn>                        
                            <GridColumn grid={'0.8'}>{unidade.phoneNumber}</GridColumn>
                            <GridColumn grid={'0.8'}>{unidade.ipAddress}</GridColumn>
                            <GridColumn grid={'0.8'}>{unidade.responsible}</GridColumn>
                            <GridColumn grid={'0.5'}>Desativar<EditItem pathname={"/cadastros/unidades/alterar"} description={"🖊️"} payload={{unidade, valid:true}}/></GridColumn>
                            <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                        </GridRow>
                    )}
                </BodyGrid>
            ):
            ( 
            
                <BodyCard>
                    <AddNewItemCard
                        description={"Nova unidade"}
                        pathname={"/cadastros/unidades/novo"}
                        payload={{valid: false}}
                    />
                    {unidades.map(unidade => 
                        <ContentCard>
                            <div className={"cardHeader"}>
                                <h3 className={"titulo"}>{unidade.name}</h3>
                                <span className={"subtitulo"}>{unidade.Entidade.name}</span>
                            </div>
                            <p className={"paragrafo"}>{unidade.phoneNumber}</p>
                            <p className={"paragrafo"}>{unidade.responsible}</p>
                        </ContentCard>
                    )}
                </BodyCard>
            )
        }
        <Footer/>
      </>
  )
}

export default UnidadesAdministrativas;