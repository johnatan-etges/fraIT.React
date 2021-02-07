import styled from 'styled-components';
import theme from 'styled-theming';

export const Container = styled.div`

  background-color: ${({theme}) => theme.CARD_BACKGROUND};

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  min-height: 150px;
  max-height: 250px;
  
  padding: 1vh 1vw;

  position: relative;

  border: 1px solid ${({theme}) => theme.CARD_BORDER};
  border-radius: 10px;
  box-shadow: 2px 2px 0 ${({theme}) => theme.shadow};;

  margin: .8vh .5vw 0 .5vw; 

  &:hover {
    border: 1px solid ${({theme}) => theme.CARD_BORDER_HOVER};
    box-shadow: 0 0 0;
  }

  .cardHeader {
    min-height: 50px;
    padding: 1vh 0;
    margin-bottom: 15px;

    border-bottom: 1px solid ${({theme}) => theme.contrast};
  }

  .titulo {
    color: ${({theme}) => theme.CARD_TITLE};
    font-size: 2.2vh;
  }

  .subtitulo {
    font-size: 1.8vh;
    color: ${({theme}) => theme.CARD_SUBTITLE};
  }

  .paragrafo {
    font-size: 2vh;
    color: ${({theme}) => theme.CARD_PARAGRAPH};
  }

  @media (max-width: ${({theme}) => theme.tablet}) {

    h3 {
      font-size: 3vh;
    }

    p {
      font-size: 2vh;
    }
  }

  @media (max-width: ${({theme}) => theme.mobile}) {

    h3 {
      font-size: 3.5vh;
    }

    p {
      font-size: 2.4vh;
    }
  } 
`;
