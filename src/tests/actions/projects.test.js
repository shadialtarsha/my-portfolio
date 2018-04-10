import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setProjects, startSetProjects } from '../../actions/projects';
import projects from '../fixtures/projects';

const createMockStore = configureMockStore([thunk]);

test('should setup set projects action object', () => {
  expect(setProjects(projects)).toEqual({
    type: 'SET_PROJECTS',
    projects,
  });
});

test('should setup set projects action object with default value', () => {
  expect(setProjects()).toEqual({
    type: 'SET_PROJECTS',
    projects: [],
  });
});

test('should fetch projects from the server', done => {
  const store = createMockStore();
  store.dispatch(startSetProjects()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_PROJECTS',
      projects,
    });
    done();
  });
});
