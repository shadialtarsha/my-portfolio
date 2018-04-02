import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Header} />
      <Route path="/about" component={Header} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
