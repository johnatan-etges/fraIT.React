
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../services/api';

import Header from '../../../components/header';
import BodyCard from '../../../components/BodyCard';
import BodyGrid from '../../../components/BodyGrid';
import Footer from '../../../components/footer';
import ContentCard from '../../../components/ContentCard';
import OptionBox from '../../../components/optionsBox';
import OptionsBoxItem from '../../../components/optionsBoxItem';
import GridColumn from '../../../components/GridColumn';
import GridRow from '../../../components/GridRow';
import AddNewItemGrid from '../../../components/addNewItemGrid';
import AddNewItemCard from '../../../components/addNewItemCard';
import EditItem from '../../../components/editItem';

function UsuariosSistema() {
    

    const [users, setUsers] = useState([]);    
  
    async function loadUsers() {
      await api.get('/users/index')
      .then((response) => setUsers(response.data))
      .catch(() => toast.error("Não foi possível carregar os usuário", {position: toast.POSITION.TOP_RIGHT}))   
    }

    useEffect(() => {
      loadUsers();      
    },[]);

    async function activateUser(user) {       
      await api.put('/users/activation', {id: user.id})
      .then(() => loadUsers())
      .catch(() => toast.error("Não foi possível atualizar o usuário", {position: toast.POSITION.TOP_RIGHT}))      
    }

  return (
    <>
      <Header title="Usuários" title_full="Usuários cadastrados no sistema"/>
      {localStorage.getItem('@fraIT/viewMode') === 'grid' ? 
      (
        <BodyGrid>
          <AddNewItemGrid pathname={"/cadastros/usuarios/novo"} description={"Novo usuário"} payload={{valid: false}}/>
          <GridRow header={true}>
            <GridColumn grid='1'>Usuário</GridColumn>
            <GridColumn grid='2.5'>E-mail</GridColumn>
            <GridColumn grid='0.6'>Nome</GridColumn>
            <GridColumn grid='0.5'><span role="img" aria-label="Ativar ou Desativar">↕️</span></GridColumn>
            <GridColumn grid='0.5'>🖊</GridColumn>
            <GridColumn grid='0'>Detalhes</GridColumn>
          </GridRow>
          {(users.map (user => 
          (
            <GridRow>
              <GridColumn grid='1'>{user.userLoginName}</GridColumn>
              <GridColumn grid='2.5'>{user.userEmail}</GridColumn>
              <GridColumn grid='0.6'>{user.userName}</GridColumn>              
              <GridColumn grid='0.5'><button name={'Desativar'} onClick={() => activateUser(user)}>{user.userActive ? 'Desativar' : 'Ativar'}</button></GridColumn>
              <GridColumn grid='0.5'>
                <EditItem pathname={"/cadastros/usuarios/alterar"} description={"🖊️"} payload={{user, valid: true}}/>
              </GridColumn>
              <GridColumn grid='0'>
                <EditItem pathname={"/cadastros/usuarios/detalhes"} description={"Detalhes"} payload={{user}} />
              </GridColumn>
            </GridRow>
          )))}
        </BodyGrid>
      ):
      (
        <BodyCard>
          <AddNewItemCard
        pathname={"/cadastros/usuarios/novo"}
        description={"Novo usuário"}
        payload={{valid: false}}
      />   
          {(users.map (user =>(
            <ContentCard>
              <div className='cardHeader'>
                <h3 className='titulo'>{user.userName}</h3>
                <span className='subtitulo'>{user.userLoginName}</span>
              </div>
              <p className='paragrafo'>{user.userEmail}</p>
              <OptionBox>
                <EditItem 
                  pathname={"/cadastros/usuarios/detalhes"}
                  description={"Detalhes"}
                  payload={{user}}
                />              
                <OptionsBoxItem name={'Desativar'} onClick={() => activateUser({user, valid: true})}/>
                <EditItem
                  pathname={"/cadastros/usuarios/alterar"}
                  description={"Editar"}
                  payload={{user}}
                />
            </OptionBox>
            </ContentCard>
          )))}
        </BodyCard>
      )}      
      <Footer/>
    </>
  )
}
export default UsuariosSistema;