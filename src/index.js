import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router/Router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
