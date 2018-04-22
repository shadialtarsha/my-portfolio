import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import PortfolioItem from './PortfolioItem';
import Filter from './Filter';

export const PortfolioPage = ({ projects }) => (
  <div>
    <Menu />
    <div className="page">
      <main className="centered" id="portfolio">
        <div className="wrapper">
          <div className="portfolio-container">
            <header>
              <h1>my portfolio</h1>
              <p>These are my latest projects. You can use the filters below to filter the projects.</p>
            </header>
            <div className="filters-container">
              <Filter />
            </div>
            <div className="projects-container">
              {projects.map(project => <PortfolioItem key={project._id} project={project} />)}
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
    <NavLink to="/skills" className="arrow" id="arrow-left">
      <div className="lines">
        <div id="left-upper" className="line" />
        <div id="left-lower" className="line" />
      </div>
      <div id="left-arrow-link">skills</div>
    </NavLink>
    <NavLink to="/contact" className="arrow" id="arrow-right">
      <div id="right-arrow-link">contact</div>
      <div className="lines">
        <div id="right-upper" className="line" />
        <div id="right-lower" className="line" />
      </div>
    </NavLink>
  </div>
);

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(PortfolioPage);
