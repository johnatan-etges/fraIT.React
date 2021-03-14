import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function Input({value, type,label, onChange, onFocus, onBlur, setRef, spellCheck, width, id, ...props}) {

  const [focused, setFocused] = useState(false);
  const [valueForInput, setValueForInput] =  useState('');

  useEffect(() => {
    value ? setFocused(true) : setFocused(false)
    setValueForInput({...valueForInput, value})
  },[])

  function handleOnFocus() {
      setFocused(true);
      onFocus && onFocus(); 
  }

  function handleOnBlur(e) {
    e.target.value ? setFocused(true) : setFocused(false);
    onBlur && onBlur(e.target.value);
  }

  function handleOnChange(e) {
    onChange && onChange(e.target.value);
  }

  const renderLabel = () => label && <label>{ label }</label>
  
  return (
    <Container focused={focused} width={width}>
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
        value={valueForInput.value}
        {...props}
      />
    </Container>
  );
}

Input.defaultProps = {
  type: "text",
  label: "",
  /* width: '100%', */
  spellCheck: true,
  /* onFocus: () => {}, */
  /* onBlur: () => {}, */
  setRef: () => {},
  value:""
}

export default Input;