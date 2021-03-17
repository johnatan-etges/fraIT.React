import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function Input({value, type, label, required, onChange, onFocus, onBlur, setRef, spellCheck, width, id, ...props}) {

  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    value ? setFocused(true) : setFocused(false)
  },[])

  const isValid = (valueToValidate) => {
    if (required && !valueToValidate) {
      setValid(false)
    } else if ((required && valueToValidate) || (!required)) {
      setValid(true)
    }
  }

  function handleOnFocus() {
      setFocused(true);
      onFocus && onFocus(); 
  }

  function handleOnBlur(e) {
    e.target.value ? setFocused(true) : setFocused(false);
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
        /* onChange={e => onChange(e.target.value)} */
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
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
  setRef: () => {},
  value:""
}

export default Input;