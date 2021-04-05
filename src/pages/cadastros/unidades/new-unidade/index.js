import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify'

import Header from '../../../../components/header'
import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Input from '../../../../components/input'
import SendFormBtn from '../../../../components/SendFormBtn'
import Footer from '../../../../components/footer'
import api from '../../../../services/api';

function NewUnidade(props) {

    const { unidade, valid } = props.location.state.payload
    const history = useHistory()

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Atualizar unidade" : "Nova unidade"
    const title_full = editMode ? `Editando a unidade ${unidade.name}` : "Criando nova unidade"
    const title = editMode ? `Editando ${unidade.name}` : "Nova unidade"

    const [unidadeTypes, setUnidadeTypes] = useState([])
    const [entidades, setEntidades] = useState([])
    const [unidadeData, setUnidadeData] = useState({
        ID: valid ? unidade.ID : "",
        name: valid ? unidade.name : "",
        address: valid ? unidade.address : "",
        latitude: valid ? unidade.latitude : "",
        longitude: valid ? unidade.longitude : "",
        phoneNumber: valid ? unidade.phoneNumber : "",
        ipAddress: valid ? unidade.ipAddress : "",
        responsible: valid ? unidade.responsible : "",
        UnidadeTypeID: valid ? unidade.UnidadeTypeID : "",
        UnidadeTypeName: valid ? unidade.UnidadeType.name : "",
        EntidadeID: valid ? unidade.EntidadeID : "",
        EntidadeName: valid ? unidade.Entidade.name : "",        
    })

    useEffect(() => {
        loadAuxData()        
    },[])

    async function loadAuxData() {
        await api.get('/cadastros/entidades/index')
        .then((response) => setEntidades(response.data))
        .catch((err) => toast.error("Não foi possível carregar as entidades", {position: toast.POSITION.TOP_RIGHT}))

        await api.get('/cadastros/unidades/unidadeTypes/index')
        .then((response) => setUnidadeTypes(response.data))
        .catch((err) => toast.error("Não foi possível carregar os tipos de unidades", {position: toast.POSITION.TOP_RIGHT}))
    }    

    async function createUnidade() {
        await api.post('/cadastros/unidades/store', {
            name: unidadeData.name,
            address: unidadeData.address,
            latitude: unidadeData.latitude,
            longitude: unidadeData.longitude,
            phoneNumber: unidadeData.phoneNumber,
            ipAddress: unidadeData.ipAddress,
            responsible: unidadeData.responsible,
            UnidadeTypeID: unidadeData.UnidadeTypeID,
            EntidadeID: unidadeData.EntidadeID,
        })
        .then(() => {
            toast.success("Unidade criada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
            history.push('/cadastros/unidades')
        })
        .catch((err) => toast.error("Ocorreu um erro ao criar a unidade!", {position: toast.POSITION.TOP_RIGHT}))
    }

    async function updateUnidade() {
        
        await api.put('/cadastros/unidades/update', {
            ID: unidadeData.ID,
            name: unidadeData.name,
            address: unidadeData.address,
            latitude: unidadeData.latitude,
            longitude: unidadeData.longitude,
            phoneNumber: unidadeData.phoneNumber,
            ipAddress: unidadeData.ipAddress,
            responsible: unidadeData.responsible,
            UnidadeTypeID: unidadeData.UnidadeTypeID,
            EntidadeID: unidadeData.EntidadeID,
        })
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
        <Header title={title} title_full={title_full}/>
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
            <select name={"entidade"} id={"entidade"} onChange={(e) => setUnidadeData({...unidadeData, EntidadeID: e.target.value})}>
                {unidadeData.name !== "" && <option selected value={unidadeData.EntidadeID}>{unidadeData.EntidadeName}</option>}
                {entidades.map(entidade =>                    
                    <option value={entidade.id}>{entidade.name}</option>
                )}
            </select>
            {<select name={"unidade_type"} id={"unidade_type"} onChange={(e) => setUnidadeData({...unidadeData, UnidadeTypeID: e.target.value})}>
                {unidadeData.name !== "" && <option selected value={unidadeData.UnidadeTypeID}>{unidadeData.UnidadeTypeName}</option>}
                {unidadeTypes.map(unidadeType =>
                    <option value={unidadeType.ID}>{unidadeType.name}</option>
                )}
            </select>}
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
                onClick={editMode ? () => updateUnidade() : () => createUnidade()}
                text={buttonTitle}
            />
        </BodyForm>
        <Footer/>
    </>
  )
}

export default NewUnidade;