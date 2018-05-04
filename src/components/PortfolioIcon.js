import React from 'react';
import { NavLink } from 'react-router-dom';

class PortfolioIcon extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <NavLink
        className="portfolio-icon"
        to={{
          pathname: '/portfolio',
          state: {
            transition: {
              enterActive: 'portfolioIcon-enter-active',
              exitActive: 'portfolioIcon-exit-active',
            },
            duration: 2800,
          },
        }}
        title="portfolio"
      >
        <div className="grid">
          <div className="row">
            <div className="ceil" />
            <div className="ceil" />
            <div className="ceil" />
          </div>
          <div className="row">
            <div className="ceil" />
            <div className="ceil" />
            <div className="ceil" />
          </div>
          <div className="row">
            <div className="ceil" />
            <div className="ceil" />
            <div className="ceil" />
          </div>
        </div>
      </NavLink>
    );
  }
}

export default PortfolioIcon;
