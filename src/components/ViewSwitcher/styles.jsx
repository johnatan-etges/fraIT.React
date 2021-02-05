import styled from 'styled-components';

export const Container = styled.button`

  height: 30px;
  width: 30px;
  background-color: transparent;

  svg{
    margin-left: -2px;
    margin-top: -2px;

  }

  #viewCard {

    #wideRect {
      fill: ${({theme}) => theme.special};
    }

    #narrowRect {
      fill: ${({theme}) => theme.contrast};
    }
  }
`;
