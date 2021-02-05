import React from 'react';

import { StyledSearch } from './styles';

function Search({onSearch}) {  

  function handleBlur(e) {
    onSearch(e.target.value);
  }
  
  return (
    <StyledSearch>
      <div className="input-group">
        <div className="input-block">
          <label className="search-label" htmlFor="search-input">Buscar</label>
          <input id="search" className="search-input" onBlur={handleBlur}/>          
          </div>
      </div>
    </StyledSearch>
  )
}

export default Search;