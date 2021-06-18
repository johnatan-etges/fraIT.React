import React, { useContext } from 'react';
import { Route as Router, Redirect } from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound'

import { AuthContext } from '../hooks/authContext';

function Route ({ component: Component, isPrivate, isNotFound, ...rest }) {
  const { state } = useContext(AuthContext);

  const expired = Date.now()/1000 > Number(state.expiration);

  if (isPrivate && expired) {
    return <Redirect to="/"/>;
  }

  if(isPrivate && !state.isAuthenticated) {
    return <Redirect to="/"/>
  }

  if (isNotFound) {
    return (
      <Router
        {...rest}
        render={(props) => <PageNotFound/>}
      />
    )
  }

  //In the future, for public routes, this rule must to be revised
  if (!isPrivate && state.isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }
  
  return (
    <Router
      {...rest}
      render={(props) => <Component {...props}/>}
    />
  );

};

export default Route;