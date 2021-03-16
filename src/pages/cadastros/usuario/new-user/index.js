import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BodyForm from '../../../../components/BodyForm';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Input from '../../../../components/input';
import SendFormBtn from '../../../../components/SendFormBtn';

import api from '../../../../services/api';

function NewUser(props) {

    const { user, title, title_full } = props.location.state.payload;

    /* useEffect(() => {
        console.log(user, title, title_full);
    },[]) */

    const history = useHistory();

    const [data, setData] = useState({
        id: user.id || "",
        name: user.userName || "",
        surName: user.userSurName|| "",
        login: user.userLoginName || "",
        email: user.userEmail|| "",
        passToVerify: "",
        password: "",
        avatarURL: user.userAvatarURL|| "",
    });

    function validaSenha(password) {
        if (password != data.passToVerify) {
            console.log("As senhas não conferem!");
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
            default:
                toast.error("Não foi possível cadastrar o usuário! Erro não identificado!", {
                    position: toast.POSITION_TOP_RIGHT,
                });
            }
        })
    }

  return (
    <>        
        <Header title={title} title_full={title_full}/>
        <BodyForm>
            <Input
                id={"user_login"}
                name={"user_login"}
                type={"text"}
                label={"Nome de usuário"}
                value={data.login}
                onBlur={value => setData({...data, login: value})}
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
            />
            <div className="flex-row">
            <Input
                id={"user_passwd"}
                name={"user_passwd"}
                type={"password"}
                label={"Senha"}
                width={"50%"}                
                onBlur={value => setData({...data, passToVerify: value})}
            />
            <Input
                id={"verify-passwd"}
                name={"verify-passwd"}
                type={"password"}
                label={"Repita a senha"}
                width={"50%"}
                onBlur={value => validaSenha(value)}
            />
            </div>
            <div className={"flex-row"}>
            <SendFormBtn
                onClick={() => createUser()}
                text={"Criar usuário"}
                width={"30%"}    
            />
            <SendFormBtn
                onClick={() => history.goBack()}
                text={"Cancelar"}
                width={"50%"}
            />
            </div>
        </BodyForm>
        <Footer/>
    </>
  )
}

export default NewUser;