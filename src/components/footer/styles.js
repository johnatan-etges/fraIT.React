import styled from 'styled-components';

export const StyledFooter = styled.div`
    z-index: 999;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    /* height: 5.8vh; */
    padding: .5vh 0;
    background-color: ${({theme}) => theme.primary};
    opacity: .1;

    border-top: 1px solid ${({theme}) => theme.contrast};
    transition: .2s linear;

    p {
        font-size: 1.5vh;
        color: ${({ theme }) => theme.contrast};
    }

    &:hover {
        opacity: 1;
        filter: brightness(1.1);
        border-top: 1px solid ${({theme}) => theme.contrast};
    }
`;