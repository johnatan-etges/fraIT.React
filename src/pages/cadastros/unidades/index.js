import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Header from '../../../components/header'
import BodyCard from '../../../components/BodyCard'
import BodyGrid from '../../../components/BodyGrid'
import Footer from '../../../components/footer'
import GridRow from '../../../components/GridRow'
import GridColumn from '../../../components/GridColumn'

function UnidadesAdministrativas(){

    const [unidades, setUnidades] = useState([])

    useEffect(() => {
        loadUnidades()
    },[])

    async function loadUnidades(){
        await api.get('/cadastros/unidades/index')
        .then((response) => setUnidades(response.data))
        .catch(() => toast.error("Ocorreu um erro ao carregar as unidades!"))
    }

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
                    {unidades.map(unidade => 
                        <GridRow key={Math.random(unidade.id)*Math.random()}>
                            <GridColumn grid={'1.8'}>{unidade.name}</GridColumn>
                            <GridColumn grid={'1.5'}>{unidade.Entidade.name}</GridColumn>                        
                            <GridColumn grid={'0.8'}>{unidade.phoneNumber}</GridColumn>
                            <GridColumn grid={'0.8'}>{unidade.ipAddress}</GridColumn>
                            <GridColumn grid={'0.8'}>{unidade.responsible}</GridColumn>
                            <GridColumn grid={'0.5'}>Desativar</GridColumn>
                            <GridColumn grid={'0.5'}>Detalhes</GridColumn>
                        </GridRow>
                    )}
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