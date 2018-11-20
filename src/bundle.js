import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./less/main.less"

ReactDOM.render(<App {...window.__STATE__} />, document.getElementById('app'));

module.hot.accept();