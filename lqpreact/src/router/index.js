import React from 'react';
import { Route,Router,Switch } from 'react-router-dom'
import Home from './../page/home/home'
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const router =() => (
        <Router history={ browserHistory }>
            <Switch>
                <Route path='/' component={ Home } />
            </Switch>
        </Router>
);

export default router;
