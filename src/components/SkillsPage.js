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
              <h3>My Skills</h3>
              <p>These are my major skills as a Software engineer</p>
            </header>
            <div className="skills__circles">{skills.map(skill => <SkillItem key={skill._id} skill={skill} />)}</div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
    <div />
    {/* <NavLink to="/about">about</NavLink>
    <NavLink to="/portfolio">portfolio</NavLink> */}
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(SkillsPage);
