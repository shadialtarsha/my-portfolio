import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Transitions from './Transitions';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import SkillsPage from '../components/SkillsPage';
import PortfolioPage from '../components/PortfolioPage';
import ProjectPage from '../components/ProjectPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Transitions pageKey={location.key} {...location.state}>
          <Switch location={location}>
            <Route path="/about" component={AboutPage} exact />
            <Route path="/" render={() => <Redirect from="/" to="/about" exact />} exact />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/portfolio" component={PortfolioPage} exact />
            <Route path="/portfolio/:id" component={ProjectPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} error="error-page" />
          </Switch>
        </Transitions>
      )}
    />
  </Router>
);

export default AppRouter;
