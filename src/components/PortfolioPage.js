import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Footer from './Footer';
import PortfolioItem from './PortfolioItem';
import Filter from './Filter';
import filterProjects from '../selectors/filterProjects';

export const PortfolioPage = ({ projects }) => (
  <div>
    <Menu />
    <div className="page">
      <div className="centered" id="portfolio">
        <div className="wrapper">
          <div className="portfolio-container">
            <header>
              <h1>my portfolio</h1>
              <p>These are my latest projects. You can use the filters below to filter the projects.</p>
            </header>
            <div className="filters-container">
              <Filter />
            </div>
            <ul className="projects-container">
              {projects.map(project => <PortfolioItem key={project._id} project={project} />)}
            </ul>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    <LeftArrow to="skills" />
    <RightArrow to="contact" />
  </div>
);

const mapStateToProps = state => ({
  projects: filterProjects(state.projects, state.filter),
});

export default connect(mapStateToProps)(PortfolioPage);
