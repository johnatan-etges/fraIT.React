import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Input from '../../../../components/input'
import Select from '../../../../components/select'
import SendFormBtn from '../../../../components/SendFormBtn'
import api from '../../../../services/api'

// import { Container } from './styles';

function NewEmpresa(props) {

    const {empresa, valid} = props.location.state.payload
    const history = useHistory()

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Atualizar a empresa" : "Nova empresa"

    const [empresaData, setEmpresaData] = useState({
      ID: valid ? empresa.ID : "",
      name: valid ? empresa.name : "",
      cnpj: valid ? empresa.cnpj : "",
      EmpresaTypeID: valid ? empresa.EmpresaTypeID : "",
      EmpresaTypeName: valid ? empresa.EmpresaType.name : ""
    })

    const [empresaTypes, setEmpresaTypes] = useState([])
    
    useEffect(() => {
      async function loadAuxData() {
        await api.get("/cadastros/empresas/empresaTypes/index")
        .then((response) => setEmpresaTypes(prepareDataForSelect(response.data)))
        .catch(() => toast.error("Não foi possível carregar os tipos de empresas.", {position: toast.POSITION_TOP_RIGHT}))
      }
      loadAuxData()
    },[])

    function prepareDataForSelect(fetchedSelectData) {
      let dataToSet = fetchedSelectData.map(individualData => ({value: individualData.id || individualData.ID, label: individualData.name}))
      return dataToSet
    }

    async function createEmpresa() {      
      await api.post("/cadastros/empresas/store", {
        name: empresaData.name,
        cnpj: empresaData.cnpj,
        EmpresaTypeID: empresaData.EmpresaTypeID
      })
      .then(() => {
        toast.success("Empresa criada com sucesso!", {position: toast.POSITION_TOP_RIGHT})
        history.push("/cadastros/empresas")
      })
      .catch((err) => {
        switch(err.response.status) {
          case 400:
            toast.error("Os campos 'nome', 'Tipo de Empresa' são obrigatórios", {position: toast.POSITION.TOP_RIGHT})
            break
          case 500:
            toast.error("Não foi possível criar a empresa!", {position: toast.POSITION.TOP_RIGHT})
            break
          default:
            break
        }
      })
    }

    async function updatedEmpresa() {
      await api.put("/cadastros/empresas/update", {
        ID: empresaData.ID,
        name: empresaData.name,
        cnpj: empresaData.cnpj,
        EmpresaTypeID: empresaData.EmpresaTypeID
      })
      .then(() => {
        toast.success("Empresa atualizada com sucesso!", {position: toast.POSITION_TOP_RIGHT})
        history.push("/cadastros/empresas")
      })
      .catch((err) => {
        switch(err.response.status) {
          case 400:
            toast.error("Não foi possível encontrar a empresa", {position: toast.POSITION.TOP_RIGHT})
            break
          case 500:
            toast.error("Não foi possível atualizar a empresa!", {position: toast.POSITION.TOP_RIGHT})
            break
          default:
            break
        }
      })
    }

  return (
    <>
        <BodyForm>
            <GoBack/>
            <Input
              id={"empresa_name"}
              name={"empresa_name"}
              type={"text"}
              label={"Nome"}
              value={empresaData.name}
              onBlur={value => setEmpresaData({...empresaData, name: value})}
              required
            />
            <Input
              id={"empresa_cnpj"}
              name={"empresa_cnpj"}
              label={"CNPJ"}
              type={"text"}
              value={empresaData.cnpj}
              onBlur={value => setEmpresaData({...empresaData, cnpj: value})}
              required
            />
            <Select 
              selected={empresaData && {value: empresaData.EmpresaTypeID, label: empresaData.EmpresaTypeName}}
              label={"Tipo"}
              options={empresaTypes}
              onChange={value => setEmpresaData({...empresaData, EmpresaTypeID: value})}
            />
            <SendFormBtn
              onClick={editMode ? () => updatedEmpresa() : () => createEmpresa()}
              text={buttonTitle}
            />
        </BodyForm>
    </>
  )
}

export default NewEmpresa;