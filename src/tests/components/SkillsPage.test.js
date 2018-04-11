import React from 'react';
import { shallow } from 'enzyme';
import { SkillsPage } from '../../components/SkillsPage';
import skills from '../fixtures/skills';

test('should render skillsPage correctly', () => {
  const wrapper = shallow(<SkillsPage skills={skills} />);
  expect(wrapper).toMatchSnapshot();
});
