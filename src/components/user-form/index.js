import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledForm } from './styles';
import { useEffect } from 'react';

function UserForm({user, updating, loading, onAddUser, onUpdateUser, onCancel}) {
  
  const initialState={
    name: "",
    surName: "",
    login: "",
    email: "",
    avatarURL: "",
  };
  
  const [userEdit, setUserEdit] = useState('');
  const [data, setData] = useState(initialState);  

  useEffect(() =>{
    if (user) {
      setUserEdit({
        id: user.id,
        userName: user.userName,
        userSurName: user.userSurName,
        userLoginName: user.userLoginName,
        userEmail: user.userEmail,
      });
    }
  },[user])
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (!updating) {
      if (!(data.password === data.passVerifyTwo)) {            
          toast.error("As senhas não conferem.",{
            position: toast.POSITION.TOP_RIGHT,
          });
          return null;        
      }
    }

    if (updating) {
      await onUpdateUser({
          id: userEdit.id,
          name: userEdit.userName,
          surName: userEdit.userSurName,
          login: userEdit.userLoginName,
          email: userEdit.userEmail,
          avatarURL: "",
      });
    } else {
      await onAddUser({        
          name: data.name,
          surName: data.surName,
          login: data.login,
          email: data.email,
          password: data.password,
          avatarURL: "",        
      });
    }
    
    setUserEdit('');
  }

  function handleBlur() {
      if (!(data.password === data.passVerifyTwo)) {            
        toast.error("As senhas não conferem.",{
          position: toast.POSITION.TOP_RIGHT,
        });
        return null;
      }
  }

  function handleReset(e) {
    e.preventDefault();
    onCancel();
  }

  return (
  
    <StyledForm>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <header>
          {
          (updating)
          ? 
          <strong>Editar usuário</strong>
          :            
          <strong>Cadastrar usuário</strong>
          }
        </header>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="login-name">Nome de usuário</label>
            {
            (updating)
            ?
            <input id="login-name" value={userEdit.userLoginName} type="text" onChange={(e) => setUserEdit({...userEdit, userLoginName: e.target.value})} required/>
            :
            <input id="login-name" value={data.login} type="text" onChange={(e) => setData({...data, login: e.target.value})} required/>
            }
            
          </div>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            {
            (updating)
            ?
            <input id="email" type="text" value={userEdit.userEmail} onChange={(e) => setUserEdit({...userEdit, userEmail: e.target.value})} required/>
            :
            <input id="email" type="text" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required/>
            }            
          </div>        
        </div>
        
          {
          (updating)
          ?
          null
          :
          (
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required/>
            </div>
            <div className="input-block">
              <label htmlFor="confirm-password">Confirmação de Senha</label>
              <input id="confirm-password" type="password" value={data.passVerifyTwo} onChange={(e) => setData({...data, passVerifyTwo: e.target.value})} onBlur={handleBlur} required/>
            </div>
          </div>
          )
          }
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            {(updating)
            ?
            <input id="name" type="text" value={userEdit.userName} onChange={(e) => setUserEdit({...userEdit, userName: e.target.value})} required/>  
            :
            <input id="name" type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} required/>
            }            
          </div>
          <div className="input-block">
            <label htmlFor="surName">Sobrenome</label>
            {
            (updating)
            ?
            <input id="surName" type="text" value={userEdit.userSurName} onChange={(e) => setUserEdit({...userEdit, userSurName: e.target.value})}/>
            :
            <input id="surName" type="text" value={data.surName} onChange={(e) => setData({...data, surName: e.target.value})}/>
            }            
          </div>      
        </div>
        <footer>
          <button type="submit" disabled={loading}>
            {(loading) 
            ? 
            "Aguarde..."
            :
            (updating)
            ?
            "Atualizar cadastro"
            :
            "Enviar cadastro"
            }
          </button>
          {
          (updating)
          ?
          <button type="reset">
            Cancelar
          </button> 
          :
          null 
          }
        </footer>
      </form>
    </StyledForm>
  )
}

export default UserForm;