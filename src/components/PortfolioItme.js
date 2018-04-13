import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ project }) => (
  <div>
    <Link to={`/portfolio/${project._id}`}>Project</Link>
    <p>{project.title}</p>
    <p>{project.tags}</p>
  </div>
);

export default PortfolioItem;
