import React from 'react';

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