import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/landing/index';
import TeacherList from './pages/teacher-list/index';
import TeacherForm from './pages/teacher-form/index';
import Login from './pages/login/index';

function Routes() {
    return (
        <BrowserRouter>
            {/* <Route path="/" exact component={Landing} />*/}
            <Route path="/" exact component={Login} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;