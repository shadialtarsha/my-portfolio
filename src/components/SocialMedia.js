import React from 'react';

class SocialMedia extends React.Component {
  componentDidMount() {
    const mobileSize = window.matchMedia('(max-width: 36em - .1em)');
    if (mobileSize.matches) {
      const socialIcons = document.querySelector('.social-media');
      const wantedTop = `${window.innerHeight * 87 / 100}px`;
      socialIcons.style.top = wantedTop;
      window.addEventListener('resize', () => {
        const newTop = `${window.innerHeight * 87 / 100}px`;
        socialIcons.style.top = newTop;
      });
    }
  }
  render() {
    return (
      <div className="social-media">
        <span>Follow me</span>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/shadi.altarsha"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Facebook"
            >
              <span className="fa-stack fa-2x stack-style">
                <i id="facebook-square" className="fas fa-square fa-stack-2x square" />
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse icon" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shadialtarsha"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on GitHub"
            >
              <span className="fa-stack fa-2x stack-style">
                <i id="github-square" className="fas fa-square fa-stack-2x square" />
                <i className="fab fa-github fa-stack-1x fa-inverse icon" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/shadi_altarsha"
              target="_blank"
              rel="noopener noreferrer"
              title=" Follow me on Twitter"
            >
              <span className="fa-stack fa-2x stack-style">
                <i id="twitter-square" className="fas fa-square fa-stack-2x square" />
                <i className="fab fa-twitter fa-stack-1x fa-inverse icon" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shadi_altarsha"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Instagram"
            >
              <span className="fa-stack fa-2x stack-style">
                <i id="instagram-square" className="fas fa-square fa-stack-2x square" />
                <i className="fab fa-instagram fa-stack-1x fa-inverse icon" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
