import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SkillsPage from '../components/SkillsPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
