import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
  <div>
    <Header />
    <div>
      <h1>404 error</h1>
      <p>Wow!Something went wrong.</p>
      <p>The page you are trying to access does not exist.</p>
      <p>Click on the link below to return to the website.</p>
      <Link to="/">Return to the website</Link>
    </div>
  </div>
);

export default NotFoundPage;
