import React, { useState } from 'react';

import { Container } from './styles';

function Input({type,label, onChange, onFocus, onBlur, setRef, spellCheck, width, ...props}) {

  const [focused, setFocused] = useState(false);

  function handleOnFocus() {    
      setFocused(true);
      onFocus(); 
  }

  function handleOnBlur(e) {
    e.target.value ? setFocused(true) : setFocused(false);
    onBlur();
  }

  const renderLabel = () => label && <label>{ label }</label>
  
  return (
    <Container focused={focused} width={width}>
      {renderLabel()}
      <input        
        type={type}
        onChange={e => onChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
        spellCheck={spellCheck}
        {...props}
      />
    </Container>
  );
}

Input.defaultProps = {
  type: "text",
  label: "",
  width: '100%',
  spellCheck: true,
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
}

export default Input;