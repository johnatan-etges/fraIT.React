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
                    <span className={"card-body-text-item"}>{user.userEmail}</span>
                    <span className={"card-body-text-item"}></span>
                </div>          
                
            </Container>
        </BodyCard>
        <Footer/>
      </>
  )
}

export default UserDetails;