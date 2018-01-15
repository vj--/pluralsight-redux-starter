import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';
import ManageCoursePage from './components/course/ManageCoursePage';
import FourOFour from './components/common/FourOFourPage';
import Login from './components/auth/Login';
import Authentication from './components/common/RequireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="course" component={Authentication(ManageCoursePage)} />
    <Route path="course/:id" component={Authentication(ManageCoursePage)} />
    <Route path="courses" component={Authentication(CoursePage)} />
    <Route path="login" component={Login} />

    <Route path="*" component={FourOFour} />
  </Route>
);
