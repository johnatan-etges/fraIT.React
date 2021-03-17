import React from 'react';

import { GColumn } from './styles';

function GridColumn({ grid, ...props }) {
  return (
      <GColumn grid={grid}>
          {props.children}
      </GColumn>
  );
}

export default GridColumn;