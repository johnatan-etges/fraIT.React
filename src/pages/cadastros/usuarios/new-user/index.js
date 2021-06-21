import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import BodyForm from '../../../../components/BodyForm'
import Input from '../../../../components/input'
import SendFormBtn from '../../../../components/SendFormBtn'
import GoBack from '../../../../components/go-back'

import api from '../../../../services/api'

function NewUser(props) {

    const history = useHistory()
    const { user, valid }  = props.location.state.payload 

    const editMode = valid ? true : false
    const buttonTitle = editMode ? "Editar usuário" : "Novo usuário"

    const [data, setData] = useState({
        id: valid ? user.id : "",
        name: valid ? user.userName : "",
        surName: valid ? user.userSurName : "",
        login: valid ? user.userLoginName : "",
        email: valid ? user.userEmail : "",
        passToVerify: "",
        password: "",
        avatarURL: valid ? user.userAvatarURL : "",
    });
    

    function validaSenha(password) {
        if (password !== data.passToVerify) {
            toast.error("As senhas não conferem!",{
                position: toast.POSITION_TOP_RIGHT,
            });
            return
        }
        setData({...data, password});
    }

    async function createUser() {

        await api.post('/users/signup', {
            name: data.name,
            surName: data.surName,
            login: data.login,
            email: data.email,
            password: data.password,
            avatarURL: data.avatarURL,
        })
        .then(response => {
            toast.success("Usuário criado com sucesso!", {
                position: toast.POSITION_TOP_RIGHT,
            });
            
            history.push("/cadastros/usuarios");
        })
        .catch (err => {                
            switch (err.response.status) {
                case 600:
                    toast.error("Nome de usuário e/ou e-mail já cadastrado(s)!", {
                        position: toast.POSITION_TOP_RIGHT,
                    });
                    break;
                case 406:
                    toast.error("Os campos 'nome', 'e-mail', 'login' e 'senha' são obrigatórios!", {
                        position: toast.POSITION_TOP_RIGHT,
                    });
                    break;
                case 500:
                    toast.error("Não foi possível cadastrar o usuário!", {
                        position: toast.POSITION_TOP_RIGHT,
                    });
                    break;
                default:
                    toast.error("Não foi possível cadastrar o usuário! Erro não identificado!", {
                        position: toast.POSITION_TOP_RIGHT,
                    });
            }
        })
    }

    async function updateUser() {
        await api.put('/users/update', {
            id: data.id,
            name: data.name,
            surName: data.surName,
            login: data.login,
            email: data.email,
            password: data.password,
            avatarURL: data.avatarURL,
        })
        .then(response => {
            toast.success("Usuário atualizado com sucesso!", {
                position: toast.POSITION_TOP_RIGHT,
            });
            history.push("/cadastros/usuarios")
        })
        .catch(err => {
            switch (err.response.status) {
                case 501:
                    toast.error(`Não atualizado! Login: ${user.userLoginName}`, {
                        position: toast.POSITION_TOP_RIGHT,
                    });
                    break;
                case 406:
                    toast.error(`Não atualizado! Login: ${user.userLoginName}`, {
                        position: toast.POSITION_TOP_RIGHT,
                    });
                    break;                   
                default:
                    toast.error("Não foi possível cadastrar o usuário! Erro não identificado!", {
                        position: toast.POSITION_TOP_RIGHT,
                    });
            }
        });
    }

  return (
    <>
        <BodyForm>
            <GoBack/>
            <Input
                id={"user_login"}
                name={"user_login"}
                type={"text"}
                label={"Nome de usuário"}
                value={data.login}
                onBlur={value => setData({...data, login: value})}
                required
            />
            <div className="flex-row">
            <Input
                id={"user_name"}
                name={"user_name"}
                type={"text"}
                label={"Nome"}
                width={"60%"}
                value={data.name}
                onBlur={value => setData({...data, name: value})}
                required
            />
            <Input
                id={"user_surName"}
                name={"user_surname"}
                type={"text"}
                label={"Sobrenome"}
                width={"40%"}
                value={data.surName}
                onBlur={value => setData({...data, surName: value})}
            />
            </div>
            
            <Input
                id={"email"}
                name={"user_email"}
                type={"text"}
                label={"E-mail"}
                value={data.email}
                /* onChange={value => setData({...data, email: value})} */
                onChange={value => console.log(value)}
                onBlur={value => setData({...data, email: value})}
                required
            />
            <div className="flex-row">
            <Input
                id={"user_passwd"}
                name={"user_passwd"}
                type={"password"}
                label={"Senha"}
                width={"50%"}                
                onBlur={value => setData({...data, passToVerify: value})}
                required
            />
            <Input
                id={"verify-passwd"}
                name={"verify-passwd"}
                type={"password"}
                label={"Repita a senha"}
                width={"50%"}
                onBlur={value => validaSenha(value)}
                required
            />
            </div>
            <div className={"flex-row"}>
            <SendFormBtn
                onClick={editMode ? () => updateUser() : () => createUser()}
                text={buttonTitle}
                width={"30%"}    
            />
            </div>
        </BodyForm>
    </>
  )
}

export default NewUser;