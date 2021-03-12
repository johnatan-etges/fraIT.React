import styled from 'styled-components';

export const Container = styled.div`

    width: ${props => props.width || "100%"};

    button {
        width: 100%;    
        height: 45px;

        background-color: transparent;
        border: 0;

        color: ${({theme}) => theme.contrast};
        font-size: 1.5rem;
        text-align: left;

        &:hover, :focus {
            color: ${({theme}) => theme.special};
        }
        
    }
  
`;
