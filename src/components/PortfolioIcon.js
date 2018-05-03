import React from 'react';
import { NavLink } from 'react-router-dom';

class PortfolioIcon extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <NavLink className="portfolio-icon" to="/portfolio">
        <table cellSpacing="10">
          <tbody>
            <tr>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </NavLink>
    );
  }
}

export default PortfolioIcon;
