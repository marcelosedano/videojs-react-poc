import React, { Component } from 'react';
import videojs from 'video.js';

export default class VideoPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    this.player.getChild('controlBar').getChild('customControlSpacer').addChild('vjsCustomControls', {});
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video ref={node => this.videoNode = node} className="video-js">
          <track kind="captions" src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt" srcLang="en" label="English" />
        </video>
      </div>
    );
  }
}
