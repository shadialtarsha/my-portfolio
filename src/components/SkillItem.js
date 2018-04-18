import React from 'react';

const SkillItem = ({ skill }) => (
  <div className="content">
    <div className="group">
      <div className={`circular-progress${skill.percentage.split('%')[0]}`} />
      <div className="circular-text">{skill.name}</div>
    </div>
  </div>
);

export default SkillItem;
