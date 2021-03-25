import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import Signin from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import UsuariosSistema from '../pages/cadastros/usuario';
import NewUser from '../pages/cadastros/usuario/new-user';
import UserDetails from '../pages/cadastros/usuario/user-details';
import Entidades from '../pages/cadastros/entidades';
import NewEntidade from '../pages/cadastros/entidades/new-entidade';
import UnidadesAdministrativas from '../pages/cadastros/unidades';

function routes() {  
  return (        
    <BrowserRouter>
      <Switch>      
        <Route path="/" exact component={Signin}/>
        <Route path="/dashboard" component={Dashboard} isPrivate/>
        <Route path="/cadastros/usuarios" exact component={UsuariosSistema} isPrivate/>
        <Route path="/cadastros/usuarios/novo" exact component={NewUser} isPrivate/>
        <Route path="/cadastros/usuarios/alterar" exact component={NewUser} isPrivate/>
        <Route path="/cadastros/usuarios/detalhes" exact component={UserDetails} isPrivate/>
        <Route path="/cadastros/entidades" exact component={Entidades} isPrivate/>
        <Route path="/cadastros/entidades/novo" exact component={NewEntidade} isPrivate/>
        <Route path="/cadastros/unidades" component={UnidadesAdministrativas} isPrivate/>
      </Switch>
    </BrowserRouter>      
  );
}

export default routes;