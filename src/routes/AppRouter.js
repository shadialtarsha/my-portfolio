import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import SkillsPage from '../components/SkillsPage';
import PortfolioPage from '../components/PortfolioPage';
import ProjectPage from '../components/ProjectPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AboutPage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/portfolio" component={PortfolioPage} exact />
      <Route path="/portfolio/:id" component={ProjectPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} error="error-page" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
