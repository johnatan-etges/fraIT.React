import React from 'react';

import Header from '../../../../components/header';
import BodyCard from '../../../../components/BodyCard';
import Footer from '../../../../components/footer';
import GoBack from '../../../../components/go-back';

import { Container } from './styles';

function UserDetails(props) {

    const { user } = props.location.state.payload;

  return (
      <>
        <Header title={`Detalhes de ${user.userName}`} title_full={`Detalhes do usuário ${user.userName}`}/>
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
                    <div className={"box-row"}>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Tela</span>
                        <span className="card-body-text-item">Listagem de usuários</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Tela</span>
                        <span className="card-body-text-item">Detalhes de usuário</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Tela</span>
                        <span className="card-body-text-item">Novo usuário</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Tela</span>
                        <span className="card-body-text-item">Editar usuário</span>
                    </div>
                    <div className="card-item-box">
                        <span className="card-item-box-label">Tela</span>
                        <span className="card-body-text-item">Dashboard</span>
                    </div>
                    </div>
                </div>      
                
            </Container>
        </BodyCard>
        <Footer/>
      </>
  )
}

export default UserDetails;