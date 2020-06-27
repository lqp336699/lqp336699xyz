import React from 'react';
import { HashRouter as Router, Route ,Switch } from 'react-router-dom';
import Home from './../page/home/home';
import StudyDetail from './../page/studyDetail/studyDetail';
import StudyItem from './../page/studyItem/studyItem';
import Login from './../page/login/login';
import Register from './../page/register/register';
import Navbar from './../page/components/navbar'
import Lqp from './../page/components/lqp'
import Super from './../page/super/super'

import style from './../page/login/login.css'


const router =() => {
    return (
        <Router>
        <Navbar />
        <Lqp />
        <div>
            <Route path='/' exact component={ Home } />
            <Route path='/study/:id'exact component={ StudyDetail } />
            <Route path='/study/:id/studyItem/:title' exact component={ StudyItem } />
            <Route path='/login' exact component={ Login } />
            <Route path='/register' exact component={ Register } />
            <Route path='/Super' exact component={ Super } />
        </div>
        </Router>
    )
};



export default router;
