import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BodyForm from '../../../../components/BodyForm';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Input from '../../../../components/input';
import SendFormBtn from '../../../../components/SendFormBtn';

import api from '../../../../services/api';

function NewUser() {

    const [data, setData] = useState({
        name: "",
        surName: "",
        login: "",
        email: "",
        passToVerify: "",
        password: "",
        avatarURL: "",
    });

    const history = useHistory();

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

    function cancelaInclusao() {
        setData({});
    }

  return (
    <>
        <Header/>
        <BodyForm>
            <Input
                id={"user_login"}
                type={"text"}
                label={"Nome de usuário"}                
                onBlur={value => setData({...data, login: value})}
            />
            <div className="flex-row">
            <Input
                id={"user_name"}
                type={"text"}
                label={"Nome"}
                width={"60%"}
                onBlur={value => setData({...data, name: value})}
            />
            <Input
                id={"user_surName"}
                type={"text"}
                label={"Sobrenome"}
                width={"40%"}
                onBlur={value => setData({...data, surName: value})}
            />
            </div>
            
            <Input
                id={"email"}
                type={"text"}
                label={"E-mail"}
                onBlur={value => setData({...data, email: value})}
            />
            <div className="flex-row">
            <Input
                id={"senha"}
                type={"password"}
                label={"Senha"}
                width={"50%"}
                onBlur={value => setData({...data, passToVerify: value})}
            />
            <Input
                id={"confirmar-senha"}
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
                onClick={() => cancelaInclusao()}
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