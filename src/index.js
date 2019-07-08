import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app';
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render((
  <App/>
), document.getElementById('root'));
serviceWorker.register();
