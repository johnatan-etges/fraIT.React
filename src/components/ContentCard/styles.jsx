import styled from 'styled-components';

export const Container = styled.div`  
  background-color: ${({theme}) => theme.CARD_BACKGROUND};
  opacity: ${({theme}) => theme.CARD_OPACITY};

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  min-height: 150px;
  max-height: 250px;
  
  padding: 1vh 1vw;

  position: relative;

  border: ${({theme}) => theme.CARD_BORDER};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.CARD_BORDER_SHADOW};

  margin: 2rem 1rem; 

  &:hover {
    opacity: 1;
    /* box-shadow: ${({theme}) => theme.CARD_BORDER_SHADOW_HOVER}; */
    /* transition: 0.3s ease; */

    border: ${({theme}) => theme.CARD_BORDER_HOVER};

    .cardHeader {
      border-bottom: ${({theme}) => theme.CARD_HEADER_BORDER_HOVER};
    }

  }

  .cardHeader {
    min-height: 50px;
    padding: 1vh 0;
    margin-bottom: 15px;

    border-bottom: ${({theme}) => theme.CARD_HEADER_BORDER};
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
