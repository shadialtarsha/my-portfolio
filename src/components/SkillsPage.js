import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import SkillItem from './SkillItem';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Footer from './Footer';

export const SkillsPage = ({ skills }) => (
  <div>
    <Menu />
    <div className="page">
      <div className="centered" id="skills">
        <div className="wrapper">
          <div className="skills_container">
            <header>
              <h1>my skills</h1>
              <p>These are my major skills as a software engineer.</p>
            </header>
            <div className="skills__circles">{skills.map(skill => <SkillItem key={skill._id} skill={skill} />)}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    <LeftArrow to="about" />
    <RightArrow to="portfolio" />
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(SkillsPage);
