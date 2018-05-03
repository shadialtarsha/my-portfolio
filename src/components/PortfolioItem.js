import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioItem = ({ project }) => (
  <li className="project-item">
    <NavLink
      className="project-item__container"
      to={{
        pathname: `/portfolio/${project._id}`,
        state: {
          transition: {
            enterActive: 'rightSlide-enter-active',
            exitActive: 'rightSlide-exit-active',
          },
          duration: 2800,
        },
      }}
    >
      <p className="project-title">{project.title}</p>
      <div
        className="project-thumbnail"
        style={{
          backgroundImage: `url(http://shadialtarsha.com/images/${project._id}/${project.images[0]})`,
        }}
      >
        <div className="curtain">
          <ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <div className="curtain__more">
            <p>more...</p>
          </div>
        </div>
      </div>
    </NavLink>
  </li>
);

export default PortfolioItem;
