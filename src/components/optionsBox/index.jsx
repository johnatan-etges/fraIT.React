import React from 'react';

import { Container } from './styles';

import OptionsBoxItem from '../optionsBoxItem';

function OptionsBox(props) {
  return (
    <Container>
      {props.children}
      {/* <OptionsBoxItem name={props.name} icon={props.icon}/>
      <OptionsBoxItem name={'Opção 2'} icon={'❌'}/>
      <OptionsBoxItem name={'Opção 3'} icon={'🖊️'}/>
      <OptionsBoxItem name={'Opção 4'} icon={'🔑'}/> */}
    </Container>
  );
}

export default OptionsBox;