import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Menu extends React.Component {
  onMenuIconOpen = e => {
    e.currentTarget.classList.toggle('open');
    document.querySelector('#page-header').classList.toggle('hidden');
  };

  render() {
    return (
      <header id="page-header" className="hidden">
        <nav className="menu">
          <NavLink
            className="menu__link"
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
            activeClassName="active"
            onClick={() => {
              document.querySelector('#page-header .burger-icon').classList.add('open-slide');
              document.querySelector('#page-header').classList.toggle('hidden');
            }}
          >
            <span>about</span>
          </NavLink>
          <NavLink
            className="menu__link"
            to={{
              pathname: `/skills`,
              state: {
                transition: {
                  enterActive:
                    this.props.location.pathname === '/about' ? 'rightSlide-enter-active' : 'leftSlide-enter-active',
                  exitActive:
                    this.props.location.pathname === '/about' ? 'rightSlide-exit-active' : 'leftSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={() => {
              document.querySelector('#page-header .burger-icon').classList.add('open-slide');
              document.querySelector('#page-header').classList.toggle('hidden');
            }}
          >
            <span>skills</span>
          </NavLink>
          <NavLink
            className="menu__link"
            to={{
              pathname: `/portfolio`,
              state: {
                transition: {
                  enterActive:
                    this.props.location.pathname === '/contact' ? 'leftSlide-enter-active' : 'rightSlide-enter-active',
                  exitActive:
                    this.props.location.pathname === '/contact' ? 'leftSlide-exit-active' : 'rightSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={() => {
              document.querySelector('#page-header .burger-icon').classList.add('open-slide');
              document.querySelector('#page-header').classList.toggle('hidden');
            }}
          >
            <span>portfolio</span>
          </NavLink>
          <NavLink
            className="menu__link"
            to={{
              pathname: `/contact`,
              state: {
                transition: {
                  enterActive: 'rightSlide-enter-active',
                  exitActive: 'rightSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={() => {
              document.querySelector('#page-header .burger-icon').classList.add('open-slide');
              document.querySelector('#page-header').classList.toggle('hidden');
            }}
          >
            <span>contact</span>
          </NavLink>
        </nav>
        <div
          className={this.props.error ? 'burger-icon--white' : 'burger-icon'}
          role="button"
          onClick={this.onMenuIconOpen}
        >
          <div className="burger-icon__line1" />
          <div className="burger-icon__line2" />
          <div className="burger-icon__line3" />
        </div>
      </header>
    );
  }
}

export default withRouter(Menu);
