import styled from 'styled-components';

export const GColumn = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;
    
    @media only screen and (min-width: ${({theme}) => theme.tablet}) {
    width: ${props => (props.grid ? props.grid / 7 * 100 : '16.66')}%;
    }

    button {
    border: 0;
    background-color: transparent;
    color: ${({theme}) => theme.contrast};
    font-size: 1rem;
    }
`;
