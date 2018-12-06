import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CustomControlsPortal extends Component {
  constructor(props) {
    super(props);

    this.parentEl = document.getElementsByClassName('vjs-custom-control-spacer')[0];
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.parentEl.appendChild(this.el);
  }

  componentWillUnmount() {
    this.parentEl.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default CustomControlsPortal;
