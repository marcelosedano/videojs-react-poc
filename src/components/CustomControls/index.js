import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomControls from './CustomControls';

class CustomControlsContainer extends Component {
  render() {
    return <CustomControls />;
  }
}

CustomControlsContainer.propTypes = {
  vjsComponent: PropTypes.object.isRequired,
};

export default CustomControlsContainer;
