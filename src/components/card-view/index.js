import React/* , { useState } */ from 'react';

import { StyledCard } from './styles';

function CardView({user, onActivation, onUpdate, OnPassReset, ...rest}) {  

  async function handleUserActivation(e) {
    e.preventDefault();       
    await onActivation(user);    
  }

  async function handleUserUpdate(e) {
    e.preventDefault();
    await onUpdate(user);    
  }  

  function handlePassReset(e) {
    e.preventDefault();
    OnPassReset({
      id: user.id,
      userLoginName: user.userLoginName,
      userEmail: user.userEmail,
    });
  }

  return (    
    <StyledCard>  
      <header>        
        <strong>
          {user.userName}
        </strong>
        <span>
          {user.userLoginName}
        </span>
      </header>
      <p>
        {user.userEmail}
      </p>
      {(user.userActive) ? (
        <span>
          Ativo
          <button onClick={handleUserActivation}>
            <span role="img" aria-label="Desativar">
              ❌
            </span>
          </button>
        </span>
      ) : (
        <span>Inativo
          <button onClick={handleUserActivation}>
            <span role="img" aria-label="Ativar">
              ✔️
            </span>
          </button>
        </span>
      )}
      <button onClick={handleUserUpdate}>
        <span role="img" aria-label="Editar">
          🖊️
        </span>
      </button>
      <button onClick={handlePassReset}>
        <span role="img" aria-label="Trocar senha">
          🔑
        </span>
      </button>      
    </StyledCard>
  )
}

export default CardView;