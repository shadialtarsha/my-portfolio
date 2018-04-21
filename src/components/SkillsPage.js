import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import SkillItem from './SkillItem';
import Footer from './Footer';

export const SkillsPage = ({ skills }) => (
  <div>
    <Menu />
    <div className="page">
      <main className="centered" id="skills">
        <div className="wrapper">
          <div className="skills_container">
            <header>
              <h1>my skills</h1>
              <p>These are my major skills as a Software engineer</p>
            </header>
            <div className="skills__circles">{skills.map(skill => <SkillItem key={skill._id} skill={skill} />)}</div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
    <NavLink to="/about" className="arrow" id="arrow-left">
      <div className="lines">
        <div id="left-upper" className="line" />
        <div id="left-lower" className="line" />
      </div>
      <div id="left-arrow-link">about</div>
    </NavLink>
    <NavLink to="/portfolio" className="arrow" id="arrow-right">
      <div id="right-arrow-link">portfolio</div>
      <div className="lines">
        <div id="right-upper" className="line" />
        <div id="right-lower" className="line" />
      </div>
    </NavLink>
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(SkillsPage);
