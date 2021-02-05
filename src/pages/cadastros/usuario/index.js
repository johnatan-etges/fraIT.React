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

import { Row, Column } from './styles';

function CadastroUsuario() {
   
    const initialState={
      loading: false,
      updating: false,
    };

    const [users, setUsers] = useState([]);
    const [data, setData] = useState(initialState);
    const [usersPesquisa, setUsersPesquisa] = useState([]);
    const [updatingUser, setUpdatingUser] = useState(false);
  
    async function loadUsers() {
      const response = await api.get('/users/index');      
        setUsers(response.data);      
    }

    useEffect(() => {
      loadUsers();
    },[]);    

    async function handleAddUser(user) {      
      /* setData({
        ...data,
        loading: true,
      });

      try {
        const response = await api.post('/users/signup', {
          name: user.name,
          surName: user.surName,
          login: user.login,
          email: user.email,
          password: user.password,
          avatarURL: user.avatarURL,
        });        

        if (response) {
          toast.success("Usuário criado com sucesso!",{
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setUsers([
          ...users,
          {         
          id: response.data.user.id,
          userName: response.data.user.userName,
          userSurName: response.data.user.userSurName,
          userLoginName: response.data.user.userLoginName,
          userEmail: response.data.user.userEmail,
          userActive: response.data.user.userActive,         
          }
        ]);

        setData({
          ...data,
          loading: false,
        });

      } catch (error) {

        if (error.response.status === 400) {
          toast.error("Nome de usuário e/ou senha já existe(m).",{
            position: toast.POSITION.TOP_RIGHT,
          })
        }
        if (error.response.status === 406) {
          toast.error("Há campos não preenchidos, favor verificar!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setData({
          ...data,
          loading: false,
        });
      }      */

      console.log('ok');
    };

    async function handleUserActivation(e, user) {

      e.preventDefault();
      
      user.userActive = !user.userActive;
      
      const response = await api.put('/users/activation', {
        login: user.userLoginName,
        email: user.userEmail,
        active: user.userActive,
      });

      (response) ? loadUsers() : toast.error("Não foi possível atualizar", {position: toast.POSITION.TOP_RIGHT});

      //console.log(user);
    }

    async function handleLoadUpdateForm(user) {
      setData({
        ...data,        
        updating: true,
      });
      setUpdatingUser(user);
    }

    async function handleUserUpdate(user) {         
      try {
        await api.put('/users/update',{
          id: user.id,
          name: user.name,
          surName: user.surName,
          login: user.login,
          email: user.email,
          avatarURL: user.avatarURL,
        });
        setData({
          ...data,
          updating: false,
          loading: false,
        });        
        toast.success("Usuário atualizado com sucesso!",{
          position: toast.POSITION.TOP_RIGHT,
        });
        setUpdatingUser(null);
        loadUsers();

      } catch (error) {
        toast.error("Não foi possível atualizar o usuário!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setUpdatingUser(null);
      }
    }

    function handleCancelUpdate() {
      setData({
        ...data,
        updating: false,
        loading: false,
      });
      setUpdatingUser(null);     
    }

    async function handleSearch(searchTerm) {
      if(searchTerm) {
        const response = await api.get(`/users/search?searchTerm=${searchTerm}`);
        (response.data.length > 0) ? setUsersPesquisa(response.data) : toast.error("A busca não retornou resultados!", {position: toast.POSITION.TOP_RIGHT})           
      }
    }

    async function handlePassReset(user) {
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
    }
    
  return (
    <>
      <Header title="Usuários cadastrados no sistema"/>      
           
          {localStorage.getItem('@fraIT/viewMode') === 'grid' ? (
            <BodyGrid>
            <Row header={true}>
              <Column grid='1'>Usuário</Column>
              <Column grid='2.5'>E-mail</Column>
              <Column grid='0.6'>Nome</Column>
              <Column grid='1'>Sobrenome</Column>              
              <Column grid='1'>Ativo?</Column>
              <Column grid='0.5'>↕️</Column>
              <Column grid='0'>🖊</Column>
            </Row>
            {(users.map (user => (
              <Row>
                {(updatingUser) ? (
                  <input type='text' value={user.userName}/>
                ):(
                  <>
                <Column grid='1'>{user.userLoginName}</Column>
                <Column grid='2.5'>{user.userEmail}</Column>
                <Column grid='0.6'>{user.userName}</Column>
                <Column grid='1'>{user.userSurName}</Column>             
                <Column grid='1'>{user.userActive ? 'Ativo' : 'Inativo'}</Column>
                <Column grid='0.5'>{user.userActive ? <button name={'Desativar'} icon={'❌'} onClick={(e) => handleUserActivation(e, user)}>Desativar</button>: <button name={'Ativar'} icon={'✔️'} onClick={ (e) => handleUserActivation(e, user)}>Ativar</button>}</Column>
                <Column grid='0'>🖊️</Column>
                </>
                )}
              </Row>
            )))}
            </BodyGrid>
          ):(
            <BodyCard>     
          {(users.map (user =>(
            <ContentCard>
              <div className='cardHeader'>
                <h3 className='titulo'>{user.userName}</h3>
                <span className='subtitulo'>{user.userLoginName}</span>
              </div>
              <p className='paragrafo'>{user.userEmail}</p>
              <OptionBox>               
                <OptionsBoxItem name={'Desativar'} onClick={handleUserActivation}/>
            </OptionBox>
            </ContentCard>
          )))}
          </BodyCard>
          )}
      <Footer/>
    </>
  )
}
export default CadastroUsuario;