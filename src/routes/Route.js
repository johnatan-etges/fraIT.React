import React, { useContext } from 'react';
import { Route as Router, Redirect } from 'react-router-dom';

import { AuthContext } from '../hooks/authContext';

function Route ({ component: Component, isPrivate, ...rest }) {
  const { state } = useContext(AuthContext);

  const expired = Date.now()/1000 > Number(state.expiration);

  if (isPrivate && expired) {
    return <Redirect to="/"/>;
  }

  if(isPrivate && !state.isAuthenticated) {
    return <Redirect to="/"/>
  }

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