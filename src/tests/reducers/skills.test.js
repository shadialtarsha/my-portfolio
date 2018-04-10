import skillsReducer from '../../reducers/skills';
import skills from '../fixtures/skills';

test('should set default state for skills', () => {
  const state = skillsReducer(undefined, '@@INIT');
  expect(state).toEqual([]);
});

test('should set skills', () => {
  const action = {
    type: 'SET_SKILLS',
    skills,
  };
  const state = skillsReducer([], action);
  expect(state).toEqual(skills);
});
