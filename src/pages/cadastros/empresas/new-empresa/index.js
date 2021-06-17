import React from 'react'
import { useHistory } from 'react-router'

import Header from '../../../../components/header'
import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Footer from '../../../../components/footer'

// import { Container } from './styles';

function NewEmpresa(props) {

    const {entidade, valid} = props.location.state.payload
    const history = useHistory()

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Atualizar a empresa" : "Nova empresa"
    const title = editMode ? "Editando" : "Nova empresa"
    const title_full = editMode ? "Editando a empresa" : "Criando nova empresa"

  return (
    <>
        <Header title={title} title_full={title_full}/>
        <BodyForm>
            <GoBack/>
        </BodyForm>
        <Footer/>
    </>
  )
}

export default NewEmpresa;