import React from 'react';
import { shallow } from 'enzyme';
import SkillItem from '../../components/SkillItem';
import skills from '../fixtures/skills';

test('should render skillItem correctly', () => {
  const wrapper = shallow(<SkillItem skill={skills[0]} />);
  expect(wrapper).toMatchSnapshot();
});
