import styled from 'styled-components';

export const GRow = styled.div`
    width: 100%;
    height: auto;
    /* float: left; */
    box-sizing: border-box;
    ::before,
    ::after {
    content: '';
    display: table;
    }
    ::after {
        clear: both;
    }

    &:hover {
        background-color: ${({theme}) => theme.BODY_CARD_BACKGROUND};
    }

    border-bottom: 1px solid ${({theme}) => theme.special};

    font-size: ${props => props.header ? '1.5rem' : '1rem'};
    font-weight: ${props => props.header ? 'bold' : 'normal'};
`;
