import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../../../services/api';

import { toast } from 'react-toastify';

import Header from '../../../../components/header';
import BodyForm from '../../../../components/BodyForm';
import Footer from '../../../../components/footer';
import GoBack from '../../../../components/go-back';
import Input from '../../../../components/input';
import SendFormBtn from '../../../../components/SendFormBtn'

function NewEntidade(props) {

    const { entidade, valid } = props.location.state.payload
    const history = useHistory()

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Atualizar a entidade" : "Nova entidade"
    const title_full = editMode ? `Editando a entidade ${entidade.name}` : "Criando nova entidade"
    const title = editMode ? `Editando ${entidade.name}` : "Nova entidade"   

    const [data, setData] = useState({
      id: valid ? entidade.id : "",
      name: valid ? entidade.name : "",
      description: valid ? entidade.description : "",
      legacy: valid ? entidade.legacy : "",
    })

    async function createEntidade() {      
      await api.post('/cadastros/entidades/store', {
        name: data.name,
        description: data.description,
        legacy: data.legacy
      })
      .then(() => {
        toast.success("Entidade criada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
        history.push("/cadastros/entidades")
      })
      .catch((err) => {
        switch(err.response.status) {
          case 400:
            toast.error("O campo 'nome' é obrigatório", {position: toast.POSITION.TOP_RIGHT})
            break
          case 500:
            toast.error("Ocorreu um erro ao criar a entidade!", {position: toast.POSITION.TOP_RIGHT})
            break
          default:
            break
        } 
      })
      
    }

    async function updateEntidade() {
      await api.put("/cadastros/entidades/update", {
        id: data.id,
        name: data.name,
        description: data.description,
        legacy: data.legacy
      })
      .then(() => {
        toast.success("Entidade atualizada com sucesso!", {position: toast.POSITION.TOP_RIGHT})
        history.push("/cadastros/entidades");
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
        <Header title_full={title_full} title={title}/>
        <BodyForm>
            <GoBack/>
            <Input
              id={"entidade_name"}
              name={"entidade_name"}
              type={"text"}
              label={"Nome"}
              value={data.name}
              onBlur={value => setData({...data, name: value})}
              required
            />
            <Input
              id={"entidade_descricao"}
              name={"entidade_descricao"}
              type={"text"} label={"Descrição"}
              value={data.descricao}
              onBlur={value => setData({...data, description: value})}              
            />
            <Input
              id={"entidade_missao"}
              name={"entidade_missao"}
              type={"text"} label={"Missão"}
              value={data.missao}
              onBlur={value => setData({...data, legacy: value})}
            />
            <SendFormBtn
              onClick={editMode ? () => updateEntidade() : () => createEntidade()}
              text={buttonTitle}                
            />
        </BodyForm>
        <Footer/>
      </>
  );
}

export default NewEntidade;