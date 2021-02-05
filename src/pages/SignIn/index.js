import React, { useContext, useState  } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { AuthContext } from '../../hooks/authContext';

import { Container } from './styles';
import { FraITLogo } from '../../components/svg/FraITLogo';

import Input from '../../components/input';
import ThemeSwitcher from '../../components/themeSwitcher';


function SignIn() {
    
    const { dispatch } = useContext(AuthContext);

    const initialState = {
        loading: false,
        errorMessage: null,
        passwordUpdating: false,
    }
    
    const [data, setData] = useState(initialState);
    
    async function handleSubmit(e) {
        e.preventDefault();        
        toast.success("Login efetuado com sucesso. Direcionando para a página inicial.", {
            position: toast.POSITION.TOP_RIGHT,
        })
        
        try {
        const response = await api.post('/users/signin', {
            login: data.loginName,
            password: data.password,
        });
        
        if (response.data.user.passwordReseted) {            
            setData({...data, passwordUpdating: true});
        } else {
            dispatch({
                type: '@LOGIN',
                payload: {
                    user: response.data.user,
                    token: response.data.token,
                    expiration: response.data.exp,
                }            
            });
        }

        } catch(error) {
            if (error.response.status === 500) {
                toast.error("Não foi possível efetuar o login. Falha interna.", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else if (error.response.status === 401) {
                toast.error("Não foi possível efetuar o login. Acesso não autorizado", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    }

    /* function handePassChange(e) {
        e.preventDefault();
        console.log("Em construção");        
    }

    function handleCancelPassChange(e) {
        e.preventDefault();
        console.log("Em construção");
        setData({
            ...data,
            passwordUpdating: false,
        })
    } */

    return (
        <Container passwordUpdating={data.passwordUpdating}>     
            <div className={'leftSide'}>

                <div className={'loginBox'}>

                    <div className={'loginBoxHeader'}>
                        <div className={'frait-logo'}>                        
                            <FraITLogo/>
                        </div>
                        <div className={'brasao-municipio'}>
                            <img src={'mun_fbgo.png'} alt={'Município de Fraiburgo'}/>
                        </div>  
                    </div>
                        <Input type={'text'} label={'Nome de usuário'} spellCheck={false} onChange={(e) => setData({...data,loginName: e})}/>
                        <Input type={'password'} label={'Senha'} onChange={(e) => setData({...data,password: e})}/>
                        <a href={'/#'} onClick={handleSubmit}>Efetuar Login</a>
                    <div className={'footer'}>
                        <a href={'/#'}>Recuperar senha</a>
                        <a href={'/#'}>Solicitar cadastro</a>
                        <a href={'/#'}>Portal de tutoriais</a>
                        <ThemeSwitcher/>
                    </div>
                </div>

            </div>
            <div className={'rightSide'}>
                <div className={'logo-container'}>
                    <div className={'frait-logo'}>                        
                        <FraITLogo/>
                    </div>
                    <div className={'brasao-municipio'}>
                        <img src={'mun_fbgo.png'} alt={'Município de Fraiburgo'}/>
                    </div>                    
                </div>
                
            </div>
        </Container>
    ) 
}

export default SignIn;