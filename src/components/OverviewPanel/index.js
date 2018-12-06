import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

const OverviewPanel = ({ isExpanded }) => (
  <Wrapper isExpanded={isExpanded}>
    Overview content would go here
  </Wrapper>
);

OverviewPanel.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default OverviewPanel;
