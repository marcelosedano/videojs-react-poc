import React from 'react';
import ReactDOM from 'react-dom';
import VJSComponent from './VJSComponent';

export default Component => {
  class VJSWrappedComponent extends VJSComponent {
    constructor(player, options) {
      super(player, options);

      this.mount = this.mount.bind(this);

      player.ready(() => {
        this.mount();
      });

      this.on('dispose', () => {
        ReactDOM.unmountComponentAtNode(this.el());
      });
    }

    mount() {
      ReactDOM.render(<Component vjsComponent={this} />, this.el());
    }
  }

  return VJSWrappedComponent;
};
