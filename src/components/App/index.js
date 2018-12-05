import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { VideoWrapper } from './style';

export default () => (
  <VideoWrapper>
    <VideoPlayer
      aspectRatio="4:3"
      controls
      preload="auto"
      sources={[{
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        type: 'video/mp4',
      }]}
    />
  </VideoWrapper>
);
