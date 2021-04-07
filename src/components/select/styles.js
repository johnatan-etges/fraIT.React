import styled from 'styled-components';

export const Container = styled.div`
  
    width: ${props => props.width || "100%"};
    margin: .9375rem 0;
    display: flex;
    flex-direction: column; 
    position: relative;


    &:first-child{
        margin-right: 1rem;
    }

    & > select {

        width: 100%;        
        box-sizing: border-box;        

        background-color: transparent;
        outline: none;
        padding: .75rem;    
        font-size: 1rem;
        color: ${({theme}) => theme.contrast};    
        font-weight: 800;
        //transition: all .2s ease;
        z-index: 500;
        border: 1px solid ${({theme}) => theme.contrast};
        border-radius: 10px;
               
        &:hover {
            border-color: ${({theme}) => theme.special};
        }

        ${props => !props.valid && `
            border: 2px solid red;
        `}
        
        & > option {
            background-color: ${({theme}) => theme.BODY_CARD_BACKGROUND};
            color: ${({theme}) => theme.contrast};
            font-size: .9rem;
            font-weight: 400;

            &:hover {
                //background-color: ${({theme}) => theme.HEADER_BACKGROUND};
            }
        }    
    }   

    & > label {
        color: ${({theme}) => theme.contrast};
        position: absolute;
        font-size: 1rem;
        font-weight: 800;
        top: .5rem;
        //transition: all .2s ease;
        margin-left: 1rem;
        background-color: ${({theme}) => theme.primary};

        ${props => props.focused && `
        font-size: .9rem;
        transform: translate(0, -1.2rem);
        z-index: 501;
        padding: 0 .1rem 0 .1rem;
        `}
    }

    #hidden {
        display: none;
    }  
`;