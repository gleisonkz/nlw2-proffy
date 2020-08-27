import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing/index';
import TeacherList from './pages/TeacherList/index';
import TeacherForm from './pages/TeacherForm/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/users/sign_up" exact component={SignUp} />
            <Route path="/home" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;