import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioItem = ({ project }) => (
  <NavLink className="project-item" to={`/portfolio/${project._id}`}>
    <p>{project.title}</p>
    <p>{project.tags}</p>
  </NavLink>
);

export default PortfolioItem;
