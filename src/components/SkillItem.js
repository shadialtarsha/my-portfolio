import React from 'react';

const SkillItem = ({ skill }) => (
  <div>
    {skill.name} - {skill.percentage}
  </div>
);

export default SkillItem;
