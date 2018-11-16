import React from 'react';
import {hydrate} from 'react-dom';
import App from './components/App';

const initState = window.__STATE__;
delete window.__STATE__;

hydrate(<App {...initState}/>, document.getElementById('app'));