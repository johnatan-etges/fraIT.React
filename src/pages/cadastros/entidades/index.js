import React, { useEffect, useState } from 'react'

import api from '../../../services/api'

import { toast } from 'react-toastify'

import BodyCard from '../../../components/BodyCard'
import BodyGrid from '../../../components/BodyGrid'
import GridRow from '../../../components/GridRow'
import GridColumn from '../../../components/GridColumn'
import ContentCard from '../../../components/ContentCard'
import AddNewItemCard from '../../../components/addNewItemCard'
import AddNewItemGrid from '../../../components/addNewItemGrid'
import EditItem from '../../../components/editItem'

function Entidades() {  

    const [entidades, setEntidades] = useState([])

    async function loadEntidades() {
        await api.get('/cadastros/entidades/index')
        .then((response) => setEntidades(response.data))
        .catch(() => toast.error("Não foi possível carregar os usuários!", {position: toast.POSITION.TOP_RIGHT}))
    }
    
    useEffect(() => {        
        loadEntidades();
    },[])

    async function activateEntidade(entity) {
        await api.put("/cadastros/entidades/activate",{
          id: entity.id
        })
        .then(() => {
            loadEntidades()
            toast.success("Entidade atualizada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
        })
        .catch((err) => {
          switch(err) {
            case 400:
              toast.error("Não foi possível encontrar a entidade", {position: toast.POSITION.TOP_RIGHT})            
              break
            case 500:
              toast.error("Ocorreu um erro ao atualizar a entidade!", {position: toast.POSITION.TOP_RIGHT})
              break
            default:
                break
          }
        })
      }
    
    return (
        <>
        {localStorage.getItem('@fraIT/viewMode') === 'grid' ?
            (
                <BodyGrid>
                    <AddNewItemGrid pathname={"/cadastros/entidades/novo"} description={"Nova Entidade"} payload={{valid: false}}/>                    
                    <GridRow>
                        <GridColumn grid='2.5'>Nome</GridColumn>
                        <GridColumn grid='3.5'>Descrição</GridColumn>
                        {/* <GridColumn grid='2.5'>Missão</GridColumn> */}                        
                        <GridColumn grid='0.5'>Ação</GridColumn>
                        <GridColumn grid='0.5'></GridColumn>                        
                    </GridRow>
                    {entidades.map(entidade => 
                        <GridRow>
                            <GridColumn grid='2.5'>{entidade.name}</GridColumn>
                            <GridColumn grid='3.5'>{entidade.description}</GridColumn>
                            {/* <GridColumn grid='2.5'>{entidade.legacy}</GridColumn> */}
                            <GridColumn grid='0.5'>
                                <EditItem pathname={"/cadastros/entidades/alterar"} description={"🖊️"} payload={{entidade, valid: true}}/>
                                <button name={'activation'} onClick={() => activateEntidade(entidade)}>{entidade.active ? '⬇️' : '⬆️'}</button>
                            </GridColumn>
                            <GridColumn grid={'0.5'}><EditItem pathname={"/cadastros/entidades/detalhes"} payload={{entidade}} description={"Detalhes"}/></GridColumn>                         
                        </GridRow>
                    )}
                </BodyGrid>
            ):
            ( 
            
                <BodyCard>
                    <AddNewItemCard pathname={"/cadastros/entidades/novo"} description={"Nova Entidade"} payload={{valid: false}}/>
                    {entidades.map(entidade => 
                        <ContentCard>
                            <div className={"cardHeader"}>
                                <h3 className={"titulo"}>{entidade.name}</h3>
                                <span className={"subtitulo"}>{entidade.description}</span>
                            </div>                            
                            <p className={"paragrafo"}>{entidade.legacy}</p>
                        </ContentCard>
                   )}
                </BodyCard>
            )
        }
      </>
    )
}

export default Entidades;