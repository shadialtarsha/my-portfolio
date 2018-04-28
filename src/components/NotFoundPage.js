import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export const NotFoundPage = () => (
  <div>
    <Menu error="error" />
    <div className="page">
      <div className="centered" id="error">
        <div className="wrapper">
          <div className="error__container">
            <h1>404 error</h1>
            <div>
              <p>Wow! Something went wrong.</p>
              <p>The page you are trying to access does not exist.</p>
              <p>Click on the link below to return to the website.</p>
              <NavLink
                to={{
                  pathname: `/about`,
                  state: {
                    transition: {
                      enterActive: 'leftSlide-enter-active',
                      exitActive: 'leftSlide-exit-active',
                    },
                    duration: 2800,
                  },
                }}
              >
                Return to the website
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
