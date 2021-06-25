import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Input from '../../../../components/input'
import Select from '../../../../components/select'
import SendFormBtn from '../../../../components/SendFormBtn'

import api from '../../../../services/api'
import fecthData from '../../../../utils/fetchData'

import prepareDataForSelect from '../../../../utils/prepareDataForSelect'

function NewEmpresa(props) {

    const {empresa, valid} = props.location.state.payload    
    const buttonTitle = valid ? "Atualizar a empresa" : "Nova empresa"
    const history = useHistory()
    const [empresaData, setEmpresaData] = useState(valid ? empresa : {})
    const [empresaTypes, setEmpresaTypes] = useState([])
    
    useEffect(() => {
      fecthData('/cadastros/empresas/empresaTypes/index')
        .then((response) => setEmpresaTypes(prepareDataForSelect(response.data)))      
    },[])

    async function createEmpresa() {      
      await api.post("/cadastros/empresas/store", {empresa: empresaData})
        .then(history.push("/cadastros/empresas"))
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
      await api.put("/cadastros/empresas/update", {empresa: empresaData})
        .then(history.push("/cadastros/empresas"))
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
              selected={empresa && {value: empresa.EmpresaTypeID, label: empresa.EmpresaType.name}}
              label={"Tipo"}
              options={empresaTypes}
              onChange={value => setEmpresaData({...empresaData, EmpresaTypeID: value})}
            />
            <SendFormBtn
              onClick={valid ? () => updatedEmpresa() : () => createEmpresa()}
              text={buttonTitle}
            />
        </BodyForm>
    </>
  )
}

export default NewEmpresa;