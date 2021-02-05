import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import Signin from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import CadastroUsuario from '../pages/cadastros/usuario';
import SecretariasLocais from '../pages/cadastros/secretarias-locais';

function routes() {  
  return (        
    <BrowserRouter>
      <Switch>      
        <Route path="/" exact component={Signin}/>
        <Route path="/dashboard" component={Dashboard} isPrivate/>
        <Route path="/cadastros/usuario" component={CadastroUsuario} isPrivate/>
        <Route path="/cadastros/secretarias-locais" component={SecretariasLocais} isPrivate/>
      </Switch>
    </BrowserRouter>      
  );
}

export default routes;