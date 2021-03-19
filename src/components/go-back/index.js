import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function GoBack() {

    const history = useHistory();
    return (
        <Container> 
            <span className={"icon"} role={"img"} aria-label={"Voltar"} onClick={() => history.goBack()}>⬅️</span>
            <span className={"text"} onClick={() => history.goBack()}>Voltar</span>
        </Container>
    );
}

export default GoBack;