import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function Select({options, selected, name, id, label, onChange, onFocus, onBlur, width, required}) {    

    const [focused, setFocused] = useState(false)
    const [valid, setValid] = useState(true)

    useEffect(() => {verifyFocus(selected)},[selected])

    const isValid = (valueToValidate) => {
      if (required && !valueToValidate){
          setValid(false)
      } else if ((required && valueToValidate) || (!required)) {
          setValid(true)
      }
  }

    const verifyFocus = (valueToVerify) => {
      valueToVerify ? setFocused(true) : setFocused(false)
    }

    function handleOnFocus() {      
        setFocused(true)
        onFocus && onFocus()
    }

    function handleOnBlur(e) {      
        verifyFocus(e.target.value)
        isValid(e.target.value)
        onBlur && onBlur(e.target.value)
    }

    function handleOnChange(e) {
        onChange && onChange(e.target.value)
    }

    const renderLabel = () => label && <label>{ label }</label>

  return (
    <Container width={width} valid={valid} focused={focused}>
      {renderLabel()}
      <select
        id={id}
        name={name}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      > 
        {!selected && <option id={"hidden"}></option>}
        {selected && <option id={"hidden"} selected value={selected.value}>{selected.label}</option>}
        {options.map(option => 
          <option value={option.value}>{option.label}</option>
        )}
      </select>
      
    </Container>
  )
}

Select.defaultProps = {
  id: Math.random().toString().concat('select'),
  name: Math.random().toString().concat('select'),
  label: "",
  required: false,
}

export default Select;