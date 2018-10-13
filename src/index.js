import React from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';
import Root from './components/Root';

ReactDOM.render(<Root />, document.getElementById('app'));

module.hot.accept();