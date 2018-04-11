import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import SkillsPage from '../components/SkillsPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AboutPage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route component={NotFoundPage} error="error-page" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
