import React from 'react';
import PerfectScrollBar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

import { Container } from './styles';

import ContentContainer from '../ContentContainer';
/* import { RegisterInsertion } from '../svg/Body'; */
/* import Input from '../../components/input'; */
import ContentCard from '../ContentCard';

function Body(props) {
  return (
    <Container>
      <PerfectScrollBar>
        {props.children}
      </PerfectScrollBar>
    </Container> 
  );
}

export default Body;