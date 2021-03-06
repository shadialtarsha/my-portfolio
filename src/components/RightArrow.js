import React from 'react';
import { NavLink } from 'react-router-dom';

const RightArrow = ({ to, title }) => (
  <NavLink
    to={{
      pathname: `/${to}`,
      state: {
        transition: {
          enterActive: 'rightSlide-enter-active',
          exitActive: 'rightSlide-exit-active',
        },
        duration: 2800,
      },
    }}
    className="arrow arrow-right"
  >
    <div className="arrow__link arrow__link--right">{title || to}</div>
    <div className="lines">
      <div className="arrow__line arrow__line--right-upper" />
      <div className="arrow__line arrow__line--right-lower" />
    </div>
  </NavLink>
);
export default RightArrow;
