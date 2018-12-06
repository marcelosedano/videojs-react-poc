import React from 'react';
import PropTypes from 'prop-types';
import CommentsPanel from '../CommentsPanel';
import OverviewPanel from '../OverviewPanel';
import VideoPlayer from '../VideoPlayer';
import { Wrapper } from './style';

const App = ({
  isCommentsPanelExpanded,
  isOverviewPanelExpanded,
  onCommentsButtonClick,
  onOverviewButtonClick,
}) => (
  <Wrapper>
    <OverviewPanel isExpanded={isOverviewPanelExpanded}/>
    <VideoPlayer
      aspectRatio="4:3"
      controls
      onCommentsButtonClick={onCommentsButtonClick}
      onOverviewButtonClick={onOverviewButtonClick}
      preload="auto"
      sources={[{
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        type: 'video/mp4',
      }]}
    />
    <CommentsPanel isExpanded={isCommentsPanelExpanded}/>
  </Wrapper>
);

App.propTypes = {
  isCommentsPanelExpanded: PropTypes.bool.isRequired,
  isOverviewPanelExpanded: PropTypes.bool.isRequired,
  onCommentsButtonClick: PropTypes.func.isRequired,
  onOverviewButtonClick: PropTypes.func.isRequired,
};

export default App;
