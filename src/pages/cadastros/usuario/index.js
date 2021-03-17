
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
    /*const [data, setData] = useState(initialState);
    const [usersPesquisa, setUsersPesquisa] = useState([]);*/
  
    async function loadUsers() {
      const response = await api.get('/users/index');      
        setUsers(response.data);      
    }

    useEffect(() => {
      loadUsers();
    },[]);

    async function handleUserActivation(e, user) {

      e.preventDefault();
      
      user.userActive = !user.userActive;
      
      const response = await api.put('/users/activation', {
        login: user.userLoginName,
        email: user.userEmail,
        active: user.userActive,
      });

      response ? loadUsers() : toast.error("Não foi possível atualizar", {position: toast.POSITION.TOP_RIGHT});
    }
   
    /* async function handleSearch(searchTerm) {
      if(searchTerm) {
        const response = await api.get(`/users/search?searchTerm=${searchTerm}`);
        (response.data.length > 0) ? setUsersPesquisa(response.data) : toast.error("A busca não retornou resultados!", {position: toast.POSITION.TOP_RIGHT})           
      }
    } */

    /* async function handlePassReset(user) {
      console.log(user);
      try {
        const response = await api.put('/users/passUpdate',{
          id: user.id,
          userLoginName: user.userLoginName,
          userEmail: user.userEmail,
        });
        console.log(response.data);      
        toast.success(`Senha padrão definida para o usuário ${user.userLoginName}`,{position: toast.POSITION.TOP_RIGHT});      
    
      } catch (err) {
        toast.error("Senha não alterada!", {position: toast.POSITION.TOP_RIGHT})
      }
    } */
    
  return (
    <>
      <Header title="Usuários" title_full="Usuários cadastrados no sistema"/>
      {localStorage.getItem('@fraIT/viewMode') === 'grid' ? 
      (
        <BodyGrid>
          <AddNewItemGrid
        pathname={"/cadastros/usuarios/novo"}
        description={"Novo usuário"}
        payload={{
          valid: false
        }}
      />
          <GridRow header={true}>
            <GridColumn grid='1'>Usuário</GridColumn>
            <GridColumn grid='2.5'>E-mail</GridColumn>
            <GridColumn grid='0.6'>Nome</GridColumn>
            <GridColumn grid='0.5'><span role="img" aria-label="Ativar ou Desativar">↕️</span></GridColumn>
            <GridColumn grid='0'>🖊</GridColumn>
          </GridRow>
          {(users.map (user => 
          (
            <GridRow>
              <GridColumn grid='1'>{user.userLoginName}</GridColumn>
              <GridColumn grid='2.5'>{user.userEmail}</GridColumn>
              <GridColumn grid='0.6'>{user.userName}</GridColumn>              
              <GridColumn grid='0.5'><button name={'Desativar'} onClick={(e) => handleUserActivation(e, user)}>{user.userActive ? 'Desativar' : 'Ativar'}</button></GridColumn>
              <GridColumn grid='0'>
                <EditItem
                  pathname={"/cadastros/usuarios/alterar"}
                  description={"🖊️"}
                  payload={{
                    user,
                    valid: true
                  }}
                />
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
        payload={{
          valid: false
        }}
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
                  payload={{
                    user,
                  }}
                />              
                <OptionsBoxItem name={'Desativar'} onClick={handleUserActivation}/>
                <EditItem
                  pathname={"/cadastros/usuarios/alterar"}
                  description={"Editar"}
                  payload={{
                    user,
                    valid: true
                  }}
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