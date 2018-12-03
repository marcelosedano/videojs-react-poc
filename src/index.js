import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'video.js/dist/video-js.css';

const container = document.getElementById('root');

if (container) {
  ReactDOM.render(<App />, container);
}
