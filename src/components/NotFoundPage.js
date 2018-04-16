import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export const NotFoundPage = () => (
  <div>
    <Menu error="error" />
    <div className="page">
      <main id="error" className="centered">
        <div className="wrapper">
          <div className="error__container">
            <h1>404 error</h1>
            <div>
              <p>Wow! Something went wrong.</p>
              <p>The page you are trying to access does not exist.</p>
              <p>Click on the link below to return to the website.</p>
              <NavLink to="/">Return to the website</NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div />
  </div>
);

export default NotFoundPage;
