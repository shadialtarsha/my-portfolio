import projectsReducer from '../../reducers/projects';
import projects from '../fixtures/projects';

test('should set default state for projects', () => {
  const state = projectsReducer(undefined, '@@INIT');
  expect(state).toEqual([]);
});

test('should set projects', () => {
  const action = {
    type: 'SET_PROJECTS',
    projects,
  };
  const state = projectsReducer([], action);
  expect(state).toEqual(projects);
});
