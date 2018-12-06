import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { GlobalStyle } from './lib/styles/global';

const container = document.getElementById('root');

if (container) {
  ReactDOM.render(
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>,
    container
  );
}
