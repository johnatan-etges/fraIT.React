import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  ::before,
  ::after {
    content: '';
    display: table;
  }
  ::after {
      clear: both;
  }

  border-bottom: 1px solid ${({theme}) => theme.special};

  font-size: ${props => props.header ? '2rem' : '1rem'};
  font-weight: ${props => props.header ? 'bold' : 'normal'};
`;

export const Column = styled.div`  
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: ${({theme}) => theme.tablet}) {
    width: ${props => (props.grid ? props.grid / 7 * 100 : '16.66')}%
  }

  button {
    border: 0;
    background-color: transparent;
    color: ${({theme}) => theme.contrast};
    font-size: 1rem;
  }

`;
