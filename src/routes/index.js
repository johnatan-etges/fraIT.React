import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route'
import Signin from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import UsuariosSistema from '../pages/cadastros/usuarios'
import NewUser from '../pages/cadastros/usuarios/new-user'
import UserDetails from '../pages/cadastros/usuarios/user-details'
import Entidades from '../pages/cadastros/entidades'
import NewEntidade from '../pages/cadastros/entidades/new-entidade'
import EntidadesDetails from '../pages/cadastros/entidades/entidade-details'
import UnidadesAdministrativas from '../pages/cadastros/unidades'
import NewUnidade from '../pages/cadastros/unidades/new-unidade'
import UnidadeDetails from '../pages/cadastros/unidades/unidade-details'

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
        <Route path="/cadastros/entidades/detalhes" exact component={EntidadesDetails} isPrivate/>
        <Route path="/cadastros/entidades/novo" exact component={NewEntidade} isPrivate/>
        <Route path="/cadastros/entidades/alterar" exact component={NewEntidade} isPrivate/>
        <Route path="/cadastros/unidades" exact component={UnidadesAdministrativas} isPrivate/>
        <Route path="/cadastros/unidades/alterar" exact component={NewUnidade} isPrivate/>
        <Route path="/cadastros/unidades/novo" exact component={NewUnidade} isPrivate/>
        <Route path="/cadastros/unidades/detalhes" exact component={UnidadeDetails} isPrivate/>
      </Switch>
    </BrowserRouter>      
  );
}

export default routes;