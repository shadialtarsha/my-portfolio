import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  state = { isNavOpen: false };

  onMenuIconOpen = e => {
    e.currentTarget.classList.toggle('open');
    document.querySelector('#page-header').classList.toggle('hidden');
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    return (
      <header id="page-header" className="hidden">
        <nav className="menu">
          <NavLink className="menu__link" to="/about" activeClassName="active">
            <span>about</span>
          </NavLink>
          <NavLink className="menu__link" to="/skills" activeClassName="active">
            <span>skills</span>
          </NavLink>
          <NavLink className="menu__link" to="/portfolio" activeClassName="active">
            <span>portfolio</span>
          </NavLink>
          <NavLink className="menu__link" to="/contact" activeClassName="active">
            <span>contact</span>
          </NavLink>
        </nav>
        <div className="burger-icon" role="button" onClick={this.onMenuIconOpen}>
          <div className="burger-icon__line" />
        </div>
      </header>
    );
  }
}

export default Menu;
