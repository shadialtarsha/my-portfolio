import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
        <TransitionGroup>
          <Switch>
            <Route path="/" render={() => <Redirect to="/about" />} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/portfolio" component={PortfolioPage} exact />
            <Route path="/portfolio/:id" component={ProjectPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} error="error-page" />
          </Switch>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default AppRouter;
