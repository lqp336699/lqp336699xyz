import React from 'react';
import { HashRouter as Router, Route ,Switch } from 'react-router-dom';
import Home from './../page/home/home';
import StudyDetail from './../page/studyDetail/studyDetail';
import StudyItem from './../page/studyItem/studyItem';
import Login from './../page/login/login';
import Register from './../page/register/register';


const router =() => {
    return (
        <Router>
            <Route path='/' exact component={ Home } />
            <Route path='/study/:id'exact component={ StudyDetail } />
            <Route path='/study/:id/studyItem' exact component={ StudyItem } />
            <Route path='/login' exact component={ Login } />
            <Route path='/register' exact component={ Register } />
        </Router>
    )
};



export default router;
