import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

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
      <div className="page">
        <div className="centered" id="project">
          <div className="wrapper">
            <div className="project-container">
              <header>
                <h1>{project.title}</h1>
                <p>{project.subtitle}</p>
              </header>
              <ImageSlider id={project._id} images={project.images} />
              <section>
                <h2>Techniqual Sheet</h2>
                <hr />
                <p>{project.technicalSheet}</p>
              </section>
              <section>
                <h2>Technologies</h2>
                <hr />
                <ul>
                  {project.technologies.map(technology => (
                    <li key={`${project._id}${technology}`}>
                      <p>{technology}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>Resources</h2>
                <hr />
                <ul>
                  {project.resources.online && (
                    <li>
                      <p>
                        online:{' '}
                        <a href={project.resources.online} target="_blank">
                          {project.resources.online}
                        </a>
                      </p>
                    </li>
                  )}

                  {project.resources.github && (
                    <li>
                      <p>
                        github:{' '}
                        <a href={project.resources.github} target="_blank">
                          {project.resources.github}
                        </a>
                      </p>
                    </li>
                  )}
                </ul>
              </section>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {nextIndex !== -1 ? (
        <RightArrow to={`portfolio/${projects[nextIndex]._id}`} title={projects[nextIndex].title} />
      ) : (
        <RightArrow to="contact" />
      )}
      {previousIndex !== -1 ? (
        <LeftArrow to={`portfolio/${projects[previousIndex]._id}`} title={projects[previousIndex].title} />
      ) : (
        <LeftArrow to="skills" />
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  projects: state.projects,
  project: state.projects.find(project => project._id === props.match.params.id),
});

export default connect(mapStateToProps)(ProjectPage);
