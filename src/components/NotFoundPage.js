import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

export const NotFoundPage = () => (
  <div>
    <Header />
    <div>
      <header>
        <h1>404 error</h1>
        <p>Wow! Something went wrong.</p>
        <p>The page you are trying to access does not exist.</p>
        <p>Click on the link below to return to the website.</p>
        <NavLink to="/">Return to the website</NavLink>
      </header>
    </div>
  </div>
);

export default NotFoundPage;
