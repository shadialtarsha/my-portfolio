import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Footer from './Footer';
import PortfolioItem from './PortfolioItme';

export const PortfolioPage = ({ projects }) => (
  <div>
    <Menu />
    {projects.map(project => <PortfolioItem key={project._id} project={project} />)}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(PortfolioPage);
