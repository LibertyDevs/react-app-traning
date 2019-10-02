import React from "react";
import { Switch, Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'
import {
  Home,
  Dashboard,
  UserList,
} from './views';

const Routes: React.FC = () => {
  return (
    <div>
      <div>
        <ul>
          <li><Link to='/'>root</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/user_list'>UserList</Link></li>
          <li><Link to='/not-found'>NotFound</Link></li>
        </ul>
      </div>
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/dashboard'
          component={Dashboard}
        />
        <Route
          path='/user_list'
          component={UserList}
        />
        <Redirect to="/user_list"/>
      </Switch>
    </div>
  );
};
export default Routes;
