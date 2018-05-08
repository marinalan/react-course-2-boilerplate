import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import LoginPage from '../components/LoginPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
