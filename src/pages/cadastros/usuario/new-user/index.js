import React, { useEffect, useState } from 'react';

import BodyCard from '../../../../components/BodyCard';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import Input from '../../../../components/input';

// import { Container } from './styles';

function NewUser() {

    const [data, setData] = useState({
        name: "",
        surName: "",
        login: "",
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
        setData({password});
    }

  return (
    <>
        <Header/>
        <BodyCard>
            <Input
                id={"user_login"}
                type={"text"}
                label={"Nome de usuário"}
                onBlur={value => setData({login: value})}
            />
            <Input
                id={"user_name"}
                type={"text"}
                label={"Nome"}
                onBlur={value => setData({name: value})}
            />
            <Input
                id={"user_surName"}
                type={"text"}
                label={"Sobrenome"}
                onBlur={value => setData({surName: value})}
            />
            <Input
                id={"email"}
                type={"text"}
                label={"E-mail"}
                onBlur={value => setData({email: value})}
            />
            <Input
                id={"senha"}
                type={"password"}
                label={"Senha"}
                onBlur={value => setData({passToVerify: value})}
            />
            <Input
                id={"confirmar-senha"}
                type={"password"}
                label={"Repita a senha"}
                onBlur={value => validaSenha(value)}
            />

            <button>Criar usuário</button>

        </BodyCard>
        <Footer/>
    </>
  )
}

export default NewUser;