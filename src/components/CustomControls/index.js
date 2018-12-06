import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { Wrapper } from './style';

const CustomControls = () => (
  <Wrapper>
    <Button label="Transcript" onClick={() => console.log('Clicked on transcript button!')} />
  </Wrapper>
);

export default CustomControls;
