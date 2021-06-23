import React from 'react'

import BodyCard from '../../../../components/BodyCard'
import GoBack from '../../../../components/go-back'
import EditItem from '../../../../components/editItem'

import { Container } from './styles';

function UserDetails(props) {

    const { user } = props.location.state.payload

    const permissions = [
        {
        label: 'Tela',
        name: 'Listagem de usuários'
        },
        {
            label: 'Tela',
            name: 'Listagem de usuários'
        },
        {
            label: 'Tela',
            name: 'Listagem de usuários'
        },
        {
            label: 'Tela',
            name: 'Listagem de usuários'
        },
        {
                label: 'Tela',
                name: 'Listagem de usuários'
        },
        {
                label: 'Tela',
                name: 'Listagem de usuários'
        },
    ]

  return (
      <>
        <BodyCard>
            <Container>
                <GoBack/>
                <div className={"card-section-title"}>
                    <span>Informações básicas</span>
                </div>
                <div className={"card"}>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Nome</span>
                        <span className={"card-header-title"}>{user.userName}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Nome de usuário</span>
                        <span  className={"card-header-subtitle"}>{user.userLoginName}</span>
                    </div>
                </div>
                <div className={"card"}>
                <div className={"card-section-title"}>
                    <span>Informações adicionais</span>
                </div>
                    <div className={"card-item-box"}>
                        <span className="card-item-box-label">E-mail</span>
                        <span className={"card-body-text-item"}>{user.userEmail}</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Situação</span>
                        <span className={"card-body-text-item"}>{user.userActive ? "Ativo" : "Desativado"}</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Diretiva</span>
                        <span className={"card-body-text-item"}>Administrador</span>
                    </div>                    
                </div>
                <div className="card">
                    <div className="card-section-title">
                        <span>Permissões do usuário no Sistema</span>
                    </div>
                    <div className={"card-box-row"}>
                    {permissions.map(permission => (
                        <div className="card-item-box">
                            <span className="card-item-box-label">{permission.label}</span>
                            <span className="card-body-text-item">{permission.name}</span>
                        </div>
                    ))}                   
                    </div>
                </div>
                <div className={"footer"}>
                    <EditItem
                        pathname={"/cadastros/usuarios/alterar"}
                        description={"Editar usuário"}
                        payload={{
                            user,
                            valid: true
                        }}
                        
                    />
                </div>
            </Container>
        </BodyCard>
      </>
  )
}

export default UserDetails;