import styled from 'styled-components';
import background_img from '../../assets/loginPage/signin_background.jpg';

export const Container = styled.div`
    background-color: ${({theme}) => theme.primary};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .leftSide, .rightSide {
        width: 100%;
        height: 100vh;
    }

    .rightSide {
        background-color: ${({theme}) => theme.secundary};
        background: url(${background_img}) no-repeat;
    }

    .leftSide {
        display: flex;
        justify-content: flex-start;
        align-items: center;      
        padding: 0 2vw;

        .loginBox {
            width: 92%;
            padding: 2vh 1vw;

            .loginBoxHeader {

                display: none;
                width: 100%;
                height: 5vh;

                
                justify-content: space-around;
                align-items: center;

                transform: translateY(-15vh);

                .frait-logo {
                    width: 45%;
                }

                .brasao-municipio {
                    width: 45%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            @media(max-width: ${({theme}) => theme.tablet}) {
                .loginBoxHeader {
                    display: flex;
                }
            }

            button {
                width: 100%;

                background-color: transparent;
                
                font-size: 1.5rem;
                color: ${({theme}) => theme.contrast};
            }  
            a { 
                width: 100%;                
                display: inline-block;  
                position: relative;
                transform: translateX(7.75%); 

                text-align: center; 

                text-decoration: none;
                color: ${({theme}) => theme.contrast};
                font-size: 1.5rem;

                z-index: 1;     
                padding: .5rem;     
                margin: -.5em -2em -2em -2em;

                transition: .2s linear;

                &:hover {                    
                    color: ${({theme}) => theme.hover};
                    transition: .2s linear;                 
                }
            }

            .footer {

                border-top: 1px solid ${({theme}) => theme.contrast};
                margin-top: 1.8vh;
                width: 100%;
                display: flex;                
                justify-content: space-between;

                a {
                    font-size: .8rem;
                    padding: 1vh 1vw;
                    margin: 0 2vw;
                }
            }
        }

    }

    .rightSide {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .logo-container {
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;

            transform: translateX(-50%);

            .frait-logo {
                display: flex;
                justify-content: center;                
                width: 20%;
                font-size: 2.5rem;                
            }

            .brasao-municipio {                
                width: 15%; 

                img {
                    width: 100%;
                    height: 100%;
                }               
            }
        }
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
        .leftSide {
            justify-content: center;
        
        }

        .rightSide {
            display: none;
        }
    }
`;