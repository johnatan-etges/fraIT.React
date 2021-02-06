import React from 'react';

import { StyledButton } from './styles';
import { useView } from '../../hooks/viewContext';

function ViewSwitcher() {

  const viewToggle = useView();

  return (
    <StyledButton onClick={() => viewToggle.toggle()}>
      {localStorage.getItem('@fraIT\viewMode') === 'card' ? (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H30V30H0V0Z" fill="white"/>
        <path d="M0.857143 0.833333H14.5714V5.83333H0.857143V0.833333Z" fill="black"/>
        <path d="M15.4286 0.833333H29.1429V5.83333H15.4286V0.833333Z" fill="black"/>
        <path d="M0.857143 12.5H14.5714V17.5H0.857143V12.5Z" fill="black"/>
        <path d="M15.4286 12.5H29.1429V17.5H15.4286V12.5Z" fill="black"/>
        <path d="M0.857143 24.1667H14.5714V29.1667H0.857143V24.1667Z" fill="black"/>
        <path d="M15.4286 24.1667H29.1429V29.1667H15.4286V24.1667Z" fill="black"/>
        <path d="M0.857143 18.3333H14.5714V23.3333H0.857143V18.3333Z" fill="black"/>
        <path d="M15.4286 18.3333H29.1429V23.3333H15.4286V18.3333Z" fill="black"/>
        <path d="M0.857143 6.66667H14.5714V11.6667H0.857143V6.66667Z" fill="black"/>
        <path d="M15.4286 6.66667H29.1429V11.6667H15.4286V6.66667Z" fill="black"/>
      </svg>
      ): (
      <svg
        id="viewCard"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >        
        <path
          id="wideRect"
          d="M 8 8 H 5 V 22 H 25 L 25 8"
        />
        <path
          id="narrowRect"
          d="M 5 5 H 9 V 25 H 21 L 21 5"
        />
      </svg>
      )}
    </StyledButton>

  );
}

export default ViewSwitcher;