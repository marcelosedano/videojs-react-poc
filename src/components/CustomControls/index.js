import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { Wrapper } from './style';

const CustomControls = ({
  onCommentsButtonClick,
  onOverviewButtonClick,
}) => (
  <Wrapper>
    <Button onClick={onOverviewButtonClick}>
      Overview
    </Button>
    <Button onClick={onCommentsButtonClick}>
      Comments
    </Button>
  </Wrapper>
);

CustomControls.propTypes = {
  onCommentsButtonClick: PropTypes.func.isRequired,
  onOverviewButtonClick: PropTypes.func.isRequired,
};

export default CustomControls;
