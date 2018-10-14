import React from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();