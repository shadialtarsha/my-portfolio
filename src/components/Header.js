import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { isNavOpen: false };

  onOpenNav = e => {
    e.currentTarget.classList.remove('hover');
    e.currentTarget.classList.remove('hover-active');
    e.currentTarget.classList.toggle('open');
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));
  };

  onMouseOver = e => {
    if (!this.state.isNavOpen) {
      e.currentTarget.classList.add('hover');
    } else {
      e.currentTarget.classList.add('hover-active');
    }
  };

  onMouseOut = e => {
    if (!this.state.isNavOpen) {
      e.currentTarget.classList.remove('hover');
    } else {
      e.currentTarget.classList.remove('hover-active');
    }
  };

  render() {
    return (
      <header>
        <nav
          className={
            this.state.isNavOpen ? 'content-container header__nav header__nav--active' : 'content-container header__nav'
          }
        >
          <div className="header__nav__container">
            <Link to="/" className="header__nav__link" exact="true">
              <span>about</span>
            </Link>
            <Link to="/skills" className="header__nav__link">
              <span>skills</span>
            </Link>
            <Link to="/portfolio" className="header__nav__link">
              <span>portfolio</span>
            </Link>
            <Link to="/contact" className="header__nav__link">
              <span>contact</span>
            </Link>
          </div>
        </nav>
        <div
          className="header__burger"
          role="button"
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onClick={this.onOpenNav}
        >
          <div className="header__burger__line" />
        </div>
      </header>
    );
  }
}

export default Header;
