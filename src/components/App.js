import React from 'react';
import VideoPlayer from './VideoPlayer';

export default () => (
  <div>
    <VideoPlayer
      controls
      sources={[{
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        type: 'video/mp4',
      }]}
    />
  </div>
);
