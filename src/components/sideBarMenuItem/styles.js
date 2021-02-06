import styled from 'styled-components';

export const StyledA = styled.a`
    background-color: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    padding-left: ${({showPad}) => `${showPad}rem`};
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ accordionOpen, theme }) => accordionOpen ? theme.special : theme.contrast};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
    }
    &:hover {
        color: ${({accordionOpen, theme }) => accordionOpen ? theme.contrast : theme.special};
    }

    .accordion_icon {
        margin-left: auto;
        transition: transform 0.6s ease;
    }

    .rotate {
        transform: rotate(90deg);
    }

    span {
        width: 2rem;
        height: 0.25rem;    
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }    
`;
