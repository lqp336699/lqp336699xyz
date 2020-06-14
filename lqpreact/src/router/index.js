import React from 'react';
import { Route,Router,Switch } from 'react-router-dom';
import Home from './../page/home/home';
import StudyDetail from './../page/studyDetail/studyDetail';
import Login from './../page/login/login';
import Register from './../page/register/register';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const router =() => {
    return (
        <Router history={ browserHistory }>
            <Route path='/' exact component={ Home } />
            <Route path='/study/:id' component={ StudyDetail } />
            <Route path='/login' component={ Login } />
            <Route path='/register' component={ Register } />
        </Router>
    )
};



export default router;
