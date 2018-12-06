import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

const CommentsPanel = ({ isExpanded }) => (
  <Wrapper isExpanded={isExpanded}>
    Comments content would go here
  </Wrapper>
);

CommentsPanel.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default CommentsPanel;
