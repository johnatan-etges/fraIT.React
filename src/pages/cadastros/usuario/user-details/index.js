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
                <div className={"info-header"}>
                    <span className={"header-title"}>{user.userName}</span>
                    <span className={"header-subtitle"}>{user.userLoginName}</span>
                </div>                
                
            </Container>
        </BodyCard>
        <Footer/>
      </>
  )
}

export default UserDetails;