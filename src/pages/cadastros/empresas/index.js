import React, { useEffect, useState } from 'react';

import api from '../../../services/api'

import { toast } from 'react-toastify'

import BodyGrid from '../../../components/BodyGrid'
import BodyCard from '../../../components/BodyCard'
import AddNewItemGrid from '../../../components/addNewItemGrid'
import AddNewItemCard from '../../../components/addNewItemCard'
import GridRow from '../../../components/GridRow'
import GridColumn from '../../../components/GridColumn'
import ContentCard from '../../../components/ContentCard'
import EditItem from '../../../components/editItem'

function Empresas() {

    const [empresas, setEmpresas] = useState([])

    async function loadEmpresas() {
        await api.get("/cadastros/empresas/index")
        .then((response) => {setEmpresas(response.data)})
        .catch(() => toast.error("Não foi possível carregar as empresas."))
    }

    useEffect(() => {        
        loadEmpresas()
    },[])

    async function activateEmpresa(empresa) {
        await api.put("/cadastros/empresas/activate", { ID: empresa.ID})
        .then((response) => {
            loadEmpresas()            
            toast.success("Empresa atualizada com sucesso!", {position: toast.POSITION_TOP_RIGHT})
        })
        .catch((err) => {
            switch(err) {
                case 400:
                  toast.error("Não foi possível encontrar a empresa", {position: toast.POSITION.TOP_RIGHT})            
                  break
                case 500:
                  toast.error("Ocorreu um erro ao atualizar a empresa!", {position: toast.POSITION.TOP_RIGHT})
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
                    <AddNewItemGrid pathname={"/cadastros/empresas/novo"} description={"Nova empresa"} payload={{valid: false}}/>
                    <GridRow>
                        <GridColumn grid='2'>Nome</GridColumn>
                        <GridColumn grid='1.5'>CNPJ</GridColumn>
                        <GridColumn grid='1.5'>Tipo</GridColumn>
                        <GridColumn grid='0.5'>Ação</GridColumn>
                        <GridColumn grid='0.5'></GridColumn>                    
                    </GridRow>
                    {empresas.map(empresa => 
                        <GridRow>
                            <GridColumn grid='2'>{empresa.name}</GridColumn>
                            <GridColumn grid='1.5'>{empresa.cnpj}</GridColumn>
                            <GridColumn grid='1.5'>{empresa.EmpresaType.name}</GridColumn>
                            <GridColumn grid='0.5'>
                                <span><button name={"activation"} onClick={() => activateEmpresa(empresa)}>{empresa.active ? '⬇️' : '⬆️'}</button></span>
                                <span><EditItem pathname={"/cadastros/empresas/alterar"} description={"🖊️"} payload={{empresa, valid: true}}/></span>
                            </GridColumn>
                            <GridColumn grid='0.5'>
                                <EditItem pathname={"/cadastros/empresas/detalhes"} payload={{empresa, valid: false}} description={"Detalhes"}/>
                            </GridColumn>
                        </GridRow>
                    )}
                </BodyGrid>
            )
            :
            (
                <BodyCard>
                    <AddNewItemCard pathname={"/cadastros/empresas/novo"} description={"Nova empresa"} payload={{valid: false}}/>
                    {empresas.map(empresa => (
                        <ContentCard>
                            <div className={"cardHeader"}>
                                <h3 className={"titulo"}>{empresa.name}</h3>
                                <span className={"subtitulo"}>{empresa.cnpj}</span>
                            </div>
                            <p className={"paragrafo"}>{empresa.EmpresaType.name}</p>
                        </ContentCard>
                    ))}
                </BodyCard>
            )
        }        
      </>
  )
}

export default Empresas;