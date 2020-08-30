import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing/index';
import TeacherList from './pages/TeacherList/index';
import TeacherForm from './pages/TeacherForm/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import SignUpDone from './pages/SignUpDone/index';
import LostPassword from './pages/LostPassword/index';
import LostPasswordDone from './pages/LostPasswordDone/index';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/users/lost-password" exact component={LostPassword} />
            <Route path="/users/lost-password-done" exact component={LostPasswordDone} />
            <Route path="/users/sign-up" exact component={SignUp} />
            <Route path="/users/sign-in-done" exact component={SignUpDone} />
            <Route path="/users/sign-in" exact component={Login} />
            <Route path="/home" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}
export default Routes;