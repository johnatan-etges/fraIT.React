import React from 'react'
import { useHistory } from 'react-router'

import BodyForm from '../../../../components/BodyForm'
import GoBack from '../../../../components/go-back'
import Input from '../../../../components/input'
import SendFormBtn from '../../../../components/SendFormBtn'

// import { Container } from './styles';

function NewEmpresa(props) {

    const {empresa, valid} = props.location.state.payload
    const history = useHistory()

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Atualizar a empresa" : "Nova empresa"

  return (
    <>
        <BodyForm>
            <GoBack/>
            <Input
              id={"empresa_name"}
              name={"empresa_name"}
              type={"text"}
              label={"Nome"}
              value={""}
              onBlur={value => {}}
              required
            />
            <Input
              id={"empresa_cnpj"}
              name={"empresa_cnpj"}
              label={"CNPJ"}
              type={"text"}
              value={""}
              onBlur={value => {}}
              required
            />
            <Input
              id={"empresa_tipo"}
              name={"empresa_tipo"}
              label={"Tipo"}
              type={"text"}
              value={""}
              onBlur={value => {}}
              required
            />
            <SendFormBtn
              onClick={editMode ? () => {} : () => {}}
              text={buttonTitle}
            />
        </BodyForm>
    </>
  )
}

export default NewEmpresa;