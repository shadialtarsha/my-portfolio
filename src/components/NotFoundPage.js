import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class NotFoundPage extends Component {
  componentDidMount() {
    document.title = 'Error page';
  }
  render() {
    return (
      <div>
        <Header error="error-page" />
        <main className="page-content">
          <div className="pages" id="error">
            <section className="centered">
              <div className="wrapper">
                <header>
                  <h1>404 error</h1>
                  <p>Wow! Something went wrong.</p>
                  <p>The page you are trying to access does not exist.</p>
                  <p>Click on the link below to return to the website.</p>
                  <Link to="/about">Return to the website</Link>
                </header>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default NotFoundPage;
