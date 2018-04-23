import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

const findNextIndex = (projects, project) => {
  const index = projects.map(pro => pro._id).indexOf(project._id);
  if (index < projects.length - 1) {
    return index + 1;
  }
  return -1;
};

const findPreviousIndex = (projects, project) => {
  const index = projects.map(pro => pro._id).indexOf(project._id);
  if (index > 0) {
    return index - 1;
  }
  return -1;
};

export const ProjectPage = ({ projects, project }) => {
  const nextIndex = findNextIndex(projects, project);
  const previousIndex = findPreviousIndex(projects, project);
  return (
    <div>
      <Menu />
      <NavLink to="/portfolio">Portfolio</NavLink>
      <div>
        {nextIndex !== -1 ? (
          <NavLink to={`/portfolio/${projects[nextIndex]._id}`}>{projects[nextIndex].title}</NavLink>
        ) : (
          <NavLink to="/contact">Contact</NavLink>
        )}
      </div>
      <div>
        {previousIndex !== -1 ? (
          <NavLink to={`/portfolio/${projects[previousIndex]._id}`}>{projects[previousIndex].title}</NavLink>
        ) : (
          <NavLink to="/contact">Skills</NavLink>
        )}
      </div>
      <header>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
      </header>
      <div>
        <h2>Techniqual Sheet</h2>
        <p>{project.technicalSheet}</p>
        <h2>Technologies</h2>
        <ul>{project.technologies.map(technology => <li key={`${project._id}${technology}`}>{technology}</li>)}</ul>
        <h2>Resources</h2>
        <ul>
          <li>online: {project.resources.online}</li>
          {project.resources.github && <li>github: {project.resources.github}</li>}
        </ul>
        <NavLink to="/skills">skills</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  projects: state.projects,
  project: state.projects.find(project => project._id === props.match.params.id),
});

export default connect(mapStateToProps)(ProjectPage);
