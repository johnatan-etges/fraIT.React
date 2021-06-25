import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify'

import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Input from '../../../../components/input'
import SendFormBtn from '../../../../components/SendFormBtn'
import Select from '../../../../components/select'

import api from '../../../../services/api'

import prepareDataForSelect from '../../../../utils/prepareDataForSelect'
import fecthData from '../../../../utils/fetchData'


function NewUnidade(props) {

    const history = useHistory()
    
    const { unidade, valid } = props.location.state.payload    
    const buttonTitle = valid ? "Atualizar unidade" : "Nova unidade"
    const [unidadeData, setUnidadeData] = useState(valid ? unidade : {})    
    const [unidadeTypes, setUnidadeTypes] = useState([])
    const [entidades, setEntidades] = useState([])        
    
    useEffect(() => {
        fecthData('/cadastros/entidades/indexActive')
        .then(response => setEntidades(prepareDataForSelect(response.data)))
    },[])

    useEffect(() => {
        fecthData('/cadastros/unidades/unidadeTypes/index')
        .then(response => setUnidadeTypes(prepareDataForSelect(response.data)))
    }, [])
     
    async function createUnidade() {
        await api.post('/cadastros/unidades/store', {unidade: unidadeData})
        .then(() => {
            toast.success("Unidade criada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
            history.push('/cadastros/unidades')
        })
        .catch((err) => {
            switch(err.response.status) {
                case 400:
                  toast.error("Os campos 'nome', 'Entidade' e 'Tipo de Unidade' são obrigatórios", {position: toast.POSITION.TOP_RIGHT})
                  break
                case 500:
                  toast.error("Ocorreu um erro ao criar a entidade!", {position: toast.POSITION.TOP_RIGHT})
                  break
                default:
                  break
              }
        })
    }

    async function updateUnidade() {
        
        await api.put('/cadastros/unidades/update', {unidade: unidadeData})
        .then(() => {
            toast.success("Unidade atualizada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
            history.push('/cadastros/unidades')
        })
        .catch((err) => {
            switch(err.response.status){
                case 500:
                    toast.error("Ocorreu um erro ao atualizar a unidade!", {position: toast.POSITION.TOP_RIGHT})
                    break;
                case 400:
                    toast.error("Ocorreu um erro ao encontrar a unidade!", {position: toast.POSITION.TOP_RIGHT})
                    break;
                default:
                    toast.error("Ocorreu um erro ao atualizar a unidade!", {position: toast.POSITION.TOP_RIGHT})
                    break;
            } 
        })
        
    }

  return (
    <>
        <BodyForm>
            <GoBack/>
            <Input
                id={"unidade_name"}
                name={"unidade_name"}
                label={"Nome"}
                value={unidadeData.name}
                onBlur={(value) => setUnidadeData({...unidadeData, name: value})}              
                required
            />            
            <Select
                selected={unidade && {value: unidade.Entidade.id, label: unidade.Entidade.name}}
                label={"Entidade"}
                options={entidades}
                onChange={value => setUnidadeData({ ...unidadeData, EntidadeID: value })}
                required
            />
            <Select
                selected={unidade && {value: unidade.UnidadeType.ID, label: unidade.UnidadeType.name}}
                label={"Tipo"}                               
                options={unidadeTypes}
                onChange={value => setUnidadeData({...unidadeData, UnidadeTypeID: value})}
                required             
            />            
            <Input
                id={"unidade_address"}
                name={"unidade_address"}
                label={"Endereço completo"}
                value={unidadeData.address}
                onBlur={(value) => setUnidadeData({...unidadeData, address: value})}
            />          
            <Input
                id={"unidade_phoneNumber"}
                name={"unidade_phoneNumber"}
                label={"Número de telefone"}
                value={unidadeData.phoneNumber}
                onBlur={(value) => setUnidadeData({...unidadeData, phoneNumber: value})}
            />
            <Input    
                id={"unidade_ipAddress"}
                name={"unidade_ipAddress"}
                label={"Endereço IP"}
                value={unidadeData.ipAddress}
                onBlur={(value) => setUnidadeData({...unidadeData, ipAddress: value})}
            />
            <Input
                id={"unidade_responsible"}
                name={"unidade_responsible"}
                label={"Responsável pela unidade"}
                value={unidadeData.responsible}
                onBlur={(value) => setUnidadeData({...unidadeData, responsible: value})}
            />
            <Input
                id={"unidade_latitude"}
                name={"unidade_latitude"}
                label={"Latitude"}
                value={unidadeData.latitude}
                onBlur={(value) => setUnidadeData({...unidadeData, latitude: value})}
            />
            <Input
                id={"unidade_longitude"}
                name={"unidade_longitude"}
                label={"Longitude"}
                value={unidadeData.longitude}
                onBlur={(value) => setUnidadeData({...unidadeData, longitude: value})}
            />
            <SendFormBtn
                onClick={valid ? () => updateUnidade() : () => createUnidade()}
                text={buttonTitle}
            />
        </BodyForm>
    </>
  )
}

export default NewUnidade;