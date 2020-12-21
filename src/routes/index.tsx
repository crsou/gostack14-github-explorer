import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* the + is necessary due to repo names having a / which would confuse the browser. */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
