import React from 'react';

import { GRow } from './styles';

function GridRow( { header, ...props } ) {
  return (
      <GRow header={header}>
          {props.children}
      </GRow>
  );
}

export default GridRow;