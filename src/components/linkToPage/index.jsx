import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function LinkToPage({pathname, payload, description}) {

  return (
  <Link
    to={{
        pathname,
        state: {
            payload
        }
    }}
  >
    <Container>
        <span>{description}</span>
    </Container>
  </Link>
  )
}

export default LinkToPage;