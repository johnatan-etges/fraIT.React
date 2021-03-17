import styled from 'styled-components';

export const Container = styled.button`

  align-items: normal;
  background-color: rgba(0,0,0,0);
  border-color: ${({theme}) => theme.secundary}!important;
  border-style: none;
  box-sizing: content-box;
  color: ${({theme}) => theme.contrast}; 
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  text-decoration: none;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
`;
