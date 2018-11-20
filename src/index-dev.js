import React from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';
import App from './components/App';

ReactDOM.render(<App {...window.__STATE__}/>, document.getElementById('app'));

module.hot.accept();