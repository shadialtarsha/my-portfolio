import React from 'react';
import { NavLink } from 'react-router-dom';

const RightArrow = ({ to }) => (
  <NavLink to={`/${to}`} className="arrow arrow-right">
    <div className="arrow__link arrow__link--right">{to}</div>
    <div className="lines">
      <div className="arrow__line arrow__line--right-upper" />
      <div className="arrow__line arrow__line--right-lower" />
    </div>
  </NavLink>
);

export default RightArrow;
