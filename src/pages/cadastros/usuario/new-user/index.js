import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BodyCard from '../../../../components/BodyCard';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Input from '../../../../components/input';

import api from '../../../../services/api';

// import { Container } from './styles';

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

    useEffect(() => {
        console.log(data);
    },[data])

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
        <Header/>
        <BodyCard>
            <Input
                id={"user_login"}
                type={"text"}
                label={"Nome de usuário"}
                onBlur={value => setData({...data, login: value})}
            />
            <Input
                id={"user_name"}
                type={"text"}
                label={"Nome"}
                onBlur={value => setData({...data, name: value})}
            />
            <Input
                id={"user_surName"}
                type={"text"}
                label={"Sobrenome"}
                onBlur={value => setData({...data, surName: value})}
            />
            <Input
                id={"email"}
                type={"text"}
                label={"E-mail"}
                onBlur={value => setData({...data, email: value})}
            />
            <Input
                id={"senha"}
                type={"password"}
                label={"Senha"}
                onBlur={value => setData({...data, passToVerify: value})}
            />
            <Input
                id={"confirmar-senha"}
                type={"password"}
                label={"Repita a senha"}
                onBlur={value => validaSenha(value)}
            />

            <button onClick={() => createUser()}>Criar usuário</button>

        </BodyCard>
        <Footer/>
    </>
  )
}

export default NewUser;