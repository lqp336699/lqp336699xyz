import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import Router from './router/index';
import './index.sass';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/js/bootstrap';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
