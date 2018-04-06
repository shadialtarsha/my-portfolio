import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = { isNavOpen: false };

  onOpenNav = e => {
    e.currentTarget.classList.toggle('open');
    document.querySelector('#page-header').classList.toggle('hidden');
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    return (
      <header id="page-header" className="hidden">
        <nav className={this.state.isNavOpen ? 'header__nav header__nav--active' : 'content-container header__nav'}>
          <NavLink to="/about" className="header__nav__link" activeStyle={{ color: 'white' }} exact>
            <span>about</span>
          </NavLink>
          <NavLink to="/skills" className="header__nav__link" activeStyle={{ color: 'white' }}>
            <span>skills</span>
          </NavLink>
          <NavLink to="/portfolio" className="header__nav__link" activeStyle={{ color: 'white' }}>
            <span>portfolio</span>
          </NavLink>
          <NavLink to="/contact" className="header__nav__link" activeStyle={{ color: 'white' }}>
            <span>contact</span>
          </NavLink>
        </nav>
        <div
          className={this.props.error ? 'header__burger--white' : 'header__burger'}
          role="button"
          onClick={this.onOpenNav}
        >
          <div className="header__burger__line" />
        </div>
      </header>
    );
  }
}

export default Header;
