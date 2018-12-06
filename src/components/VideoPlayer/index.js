import React, { Component, Fragment } from 'react';
import videojs from 'video.js';
import CustomControlsPortal from '../CustomControls/Portal';
import CustomControls from '../CustomControls';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.onPlayerReady = this.onPlayerReady.bind(this);

    this.state = {
      isPlayerReady: false,
    };
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, this.onPlayerReady);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  onPlayerReady() {
    this.setState({ isPlayerReady: true });
  }

  render() {
    const { isPlayerReady } = this.state;

    return (
      <Fragment>
        <div data-vjs-player>
          <video ref={node => this.videoNode = node} className="video-js">
            <track kind="captions" src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt" srcLang="en" label="English" />
          </video>
        </div>
        {isPlayerReady && (
          <CustomControlsPortal>
            <CustomControls />
          </CustomControlsPortal>
        )}
      </Fragment>
    );
  }
}

export default VideoPlayer;
