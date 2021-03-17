import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function GoBack() {

    const history = useHistory();
    return (
        <Container> 
            <span role={"img"} aria-label={"Voltar"} onClick={() => history.goBack()}>⬅️</span>
        </Container>
    );
}

export default GoBack;