import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import PortfolioItem from './PortfolioItme';

export const PortfolioPage = ({ projects }) => (
  <div>
    <Header />
    {projects.map(project => <PortfolioItem key={project._id} project={project} />)}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(PortfolioPage);
