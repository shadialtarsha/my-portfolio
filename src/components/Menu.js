import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Menu extends React.Component {
  componentDidMount() {
    const mobileSize = window.matchMedia('(max-width: 35.9em)');
    if (mobileSize.matches) {
      const burgerIcon = document.querySelector('.burger-icon');
      const wantedTop = `${window.innerHeight * 88 / 100}px`;
      burgerIcon.style.top = wantedTop;
      // window.addEventListener('resize', () => {
      //   if (mobileSize.matches) {
      //     burgerIcon.style.top = wantedTop;
      //   } else {
      //     burgerIcon.style.top = '3.5rem';
      //   }
      // });
    }
  }

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
                  enterActive: 'navLeftSlide-enter-active',
                  exitActive: 'navLeftSlide-exit-active',
                },
                duration: this.props.location.pathname === '/about' ? 400 : 2800,
              },
            }}
            activeClassName="active"
            onClick={e => {
              document.querySelector('#page-header').classList.toggle('hidden');
              if (this.props.location.pathname === '/about') {
                document.querySelector('#page-header .burger-icon').classList.toggle('open');
                e.preventDefault();
              }
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
                    this.props.location.pathname === '/about'
                      ? 'navRightSlide-enter-active'
                      : 'navLeftSlide-enter-active',
                  exitActive:
                    this.props.location.pathname === '/about'
                      ? 'navRightSlide-exit-active'
                      : 'navLeftSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={e => {
              document.querySelector('#page-header').classList.toggle('hidden');
              if (this.props.location.pathname === '/skills') {
                document.querySelector('#page-header .burger-icon').classList.toggle('open');
                e.preventDefault();
              }
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
                    this.props.location.pathname === '/contact'
                      ? 'navLeftSlide-enter-active'
                      : 'navRightSlide-enter-active',
                  exitActive:
                    this.props.location.pathname === '/contact'
                      ? 'navLeftSlide-exit-active'
                      : 'navRightSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={e => {
              document.querySelector('#page-header').classList.toggle('hidden');
              if (this.props.location.pathname === '/portfolio') {
                document.querySelector('#page-header .burger-icon').classList.toggle('open');
                e.preventDefault();
              }
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
                  enterActive: 'navRightSlide-enter-active',
                  exitActive: 'navRightSlide-exit-active',
                },
                duration: 2800,
              },
            }}
            activeClassName="active"
            onClick={e => {
              document.querySelector('#page-header').classList.toggle('hidden');
              if (this.props.location.pathname === '/contact') {
                document.querySelector('#page-header .burger-icon').classList.toggle('open');
                e.preventDefault();
              }
            }}
          >
            <span>contact</span>
          </NavLink>
        </nav>
        <div
          className={this.props.error ? 'burger-icon white' : 'burger-icon'}
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
