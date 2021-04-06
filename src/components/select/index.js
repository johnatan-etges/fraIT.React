import React, { useState } from 'react';

// import { Container } from './styles';

function Select({options, selected, name, id, onChange, onFocus, onBlur, required}) {    

    const [focused, setFocused] = useState(false)
    const [valid, setValid] = useState(true)

    const isValid = (valueToValidate) => {
        if (required && !valueToValidate) {
            setValid(false)
        } else if ((required && valueToValidate) || (!required)) {
            setValid(true)
        }
    }

    function handleOnFocus() {
        setFocused(true)
        onFocus && onFocus()
    }

    function handleOnBlur(e) {
        setFocused(false)
        onBlur && onBlur(e.target.value)
    }

    function handleOnChange(e) {
        onChange && onChange(e.target.value)
    }

  return (
      <select
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      >
        {selected && <option selected value={selected.value}>{selected.label}</option>}
        {options.map(option => 
          <option value={option.value}>{option.label}</option>
        )}
      </select>
  )
}

export default Select;