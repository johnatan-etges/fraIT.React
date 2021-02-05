import React, { useState } from 'react';

import { StyledForm } from './styles';
import Dropdown from '../dropdown';
import Input from '../input';
import { useEffect } from 'react';

function SecLocaisForm() {

    const initialState = {
        value: '',
    }

    const [data, setData] = useState(initialState);

    const items = [
        {
            id: 1,
            value: 'Loa',
        },
        {
            id: 2,
            value: 'Lao',
        }
    ]

    useEffect(() => {
        console.log(data.value);
    },[data.value])

  return (
    <StyledForm>        
        <form>
            <header>
                <strong>Cadastro de Secretarias</strong>
            </header>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="nome">Entidade</label>
                    <Dropdown title={'Entidade'} items={items} selectTheme={'dark'}/>
                </div>
                <div className="input-block">
                    {/* <label htmlFor="nome">Nome</label> */}
                    <Input label={'Nome'} onChange={(e) => setData({...data, value: e})} width={'20vw'} required/>
                </div>
            </div>            
            <footer>            
                <button>Salvar secretaria</button>
            </footer>
        </form>
        <div className="separador"/>
        <form>
            <header>
                <strong>Cadastro de locais</strong>
            </header>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="teste1">Secretaria/Entidade</label>
                    <Dropdown title={"Secretaria"} items={items}/>
                </div>
                <div className="input-block">
                <label htmlFor="local">Local</label>
                    <input className="local"/>
                </div>
            </div>
            <div className="input-group">                
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input id="latitude"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input id="longitude"/>
                    </div>                            
            </div>
            <footer>            
                <button>Salvar Local</button>
            </footer>
        </form>
    </StyledForm>
  );
}

export default SecLocaisForm;