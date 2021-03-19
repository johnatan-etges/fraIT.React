import styled from 'styled-components';

export const StyledSideBar = styled.nav`
  width: 400px;
  z-index: 1000;
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.secundary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  .separator {
    height: 1px;
    border: 1px solid ${({theme, open}) => (open) ? theme.primaryLight : theme.primaryDark};
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
  }
`;