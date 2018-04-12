import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import SkillItem from './SkillItem';
import Footer from './Footer';

export const SkillsPage = ({ skills }) => (
  <div>
    <Header />
    <div>
      <header>
        <h1>My Skills</h1>
        <p>These are my major skills as a Software engineer</p>
        {skills.map(skill => <SkillItem key={skill._id} skill={skill} />)}
      </header>
    </div>
    <NavLink to="/about">about</NavLink>
    <NavLink to="/portfolio">portfolio</NavLink>
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(SkillsPage);
