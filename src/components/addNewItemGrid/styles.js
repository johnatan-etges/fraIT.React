import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.contrast};
  font-size: 1.5rem;
    
  margin-left: .2rem;

  &:focus, &:hover, &:visited, *:link, &:active {
    text-decoration: none;
  }

  &:hover {
    color: ${({theme}) => theme.special}
  }
  
`;
