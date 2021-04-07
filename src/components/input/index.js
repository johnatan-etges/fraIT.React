import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function Input({value, type, label, required, onChange, onFocus, onBlur, spellCheck, width, id, ...props}) {

  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {verifyFocus(value)},[value]) 

  const isValid = (valueToValidate) => {
    if (required && !valueToValidate) {
      setValid(false)
    } else if ((required && valueToValidate) || (!required)) {
      setValid(true)
    }
  }

  const verifyFocus = (valueToVerify) => {
    valueToVerify ? setFocused(true) : setFocused(false)
  }

  function handleOnFocus() {
      setFocused(true);
      onFocus && onFocus(); 
  }

  function handleOnBlur(e) {
    verifyFocus(e.target.value)
    isValid(e.target.value);
    onBlur && onBlur(e.target.value);
  }

  function handleOnChange(e) {
    onChange && onChange(e.target.value);
  }

  const renderLabel = () => label && <label>{ label }</label>
  
  return (
    <Container focused={focused} width={width} valid={valid}>
      {renderLabel()}
      <input
        id={id}     
        type={type}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}       
        spellCheck={spellCheck}
        defaultValue={value}
        {...props}
      />
    </Container>
  );
}

Input.defaultProps = {
  type: "text",
  label: "",
  spellCheck: true,  
  value:"",
  required: false,
}

export default Input;