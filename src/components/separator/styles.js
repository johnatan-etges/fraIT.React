import styled from 'styled-components';

export const StyledSeparator = styled.div`    
    height: 1px;
    border: 1px solid ${({theme, open}) => (open) ? theme.primaryLight : theme.primaryDark};  
`;
