import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import Header from '../../../components/header';
import BodyCard from '../../../components/BodyCard';
import BodyGrid from '../../../components/BodyGrid';
import Footer from '../../../components/footer';

import GridRow from '../../../components/GridRow';
import GridColumn from '../../../components/GridColumn';

import ContentCard from '../../../components/ContentCard';
import AddNewItemCard from '../../../components/addNewItemCard';
import AddNewItemGrid from '../../../components/addNewItemGrid';

function Entidades() {  

    const [entidades, setEntidades] = useState([])
    
    async function loadEntidades() {
        api.get('/cadastros/entidades/index')
        .then((response) => setEntidades(response.data))
        .catch((err) => toast.error("Não foi possível carregar os usuário!", {position: toast.POSITION.TOP_RIGHT}))
    }

    useEffect(() => {
        loadEntidades();
    },[])
    
    return (
        <>
        <Header title={"Entidades cadastradas"} title_full={"Entidades Cadastradas no Sistema"}/>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <AddNewItemGrid
                        pathname={"/cadastros/entidades/nova"}
                        description={"Nova Entidade"}
                        payload={{
                            valid: false
                        }}
                    />                    
                    <GridRow>
                        <GridColumn grid='1.5'>Nome</GridColumn>
                        <GridColumn grid='2'>Descrição</GridColumn>
                        <GridColumn grid='2.5'>Missão</GridColumn>
                        <GridColumn grid='1'>Ativa</GridColumn>
                    </GridRow>
                    {entidades.map(entidade => 
                        <GridRow>
                            <GridColumn grid='1.5'>{entidade.name}</GridColumn>
                            <GridColumn grid='2'>{entidade.descricao}</GridColumn>
                            <GridColumn grid='2.5'>{entidade.missao}</GridColumn>
                            <GridColumn grid='1'>{entidade.ativo === true ? 'Sim' : 'Não'}</GridColumn>
                        </GridRow>
                    )}
                </BodyGrid>
            ):
            ( 
            
                <BodyCard>
                    <AddNewItemCard
                        pathname={"/cadastros/entidades/nova"}
                        description={"Nova Entidade"}
                        payload={{
                            valid: false
                        }}
                    />
                    {entidades.map(entidade => 
                        <ContentCard>
                            <div className={"cardHeader"}>
                                <h3 className={"titulo"}>{entidade.name}</h3>
                                <span className={"subtitulo"}>{entidade.descricao}</span>
                            </div>                            
                            <p className={"paragrafo"}>{entidade.missao}</p>
                        </ContentCard>
                   )}
                </BodyCard>
            )
        }
        <Footer/>
      </>
    )
}

export default Entidades;