import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { StyledLink } from './styles';

function AddNewItem({pathname, payload, description}) {

  return (    
  <StyledLink
    to={{
        pathname,
        state: {
            payload
        }
    }}
  >
    
        <span>{description}</span>
    
  </StyledLink>  
  )
}

export default AddNewItem;