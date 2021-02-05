import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 1.8rem;
    flex-wrap: wrap;    

    .dd-header {
        background-color: transparent;
        color: ${({ selectTheme, theme }) => selectTheme === 'dark' ? theme.primaryDark : theme.primaryLight};
        margin-top: .95rem;                
        border-bottom: .0625rem solid ${({ theme }) => theme.primaryLight};
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        width: 100%;
        padding: 0 1.25rem;

        &__title--bold {
            font-weight: bold;
        }

        .accordion_icon {
            margin-left: auto;
            transition: transform 0.4s ease;
        }

        .rotate {
            transform: rotate(90deg);
        }        
    }

    .dd-list {         
         margin: 0;
         width: 100%;
         margin-top: 1.25rem;
         display: none;      

         li {
             list-style-type: none;                                      

             &:first-of-type > button {
                border-top: 1px solid ${({ theme }) => theme.primaryLight};
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;                     
            }
            
             &:last-of-type > button {
                border-bottom: 1px solid ${({ theme }) => theme.primaryLight};
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
             }

             button {
                 display: flex;
                 justify-content: space-between;
                 background-color: transparent;
                 color: ${({ selectTheme, theme }) => selectTheme === 'dark' ? theme.primaryDark : theme.primaryLight};
                 font-size: 1rem;
                 /* padding: .9375rem, 1.25rem; */
                 padding: 10px;
                 border: 0;
                 border-bottom: .0625rem solid ${({ theme }) => theme.primaryLight};
                 width: 100%;
                 text-align: left;

                 &:hover {
                     cursor: pointer;
                     font-weight: bold;
                     background-color: #ccc;
                 }

                 &:focus {                     
                     font-weight: bold;
                     background-color: ${({ theme }) => theme.primaryLight};
                     color: ${({ theme }) => theme.primaryDark}
                 }
             }
                         
        }
    }

    #open {     
        z-index: 1000;       
        display: block;
        animation: 0.4s ${fadeIn} ease;
    }    
`;
