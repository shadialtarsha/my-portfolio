import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioItem = ({ project }) => (
  <li className="project-item">
    <NavLink className="project-item__container" to={`/portfolio/${project._id}`}>
      <p className="project-title">{project.title}</p>
      <div className="project-thumbnail">
        <div className="curtain">
          <ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>
      </div>
    </NavLink>
  </li>
);

export default PortfolioItem;
