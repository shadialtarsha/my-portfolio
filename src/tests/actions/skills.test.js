import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setSkills, startSetSkills } from '../../actions/skills';
import skills from '../fixtures/skills';

const createMockStore = configureMockStore([thunk]);

test('should setup a set skills action object', () => {
  expect(setSkills(skills)).toEqual({
    type: 'SET_SKILLS',
    skills,
  });
});

test('should setup a set skills action object with default option', () => {
  expect(setSkills()).toEqual({
    type: 'SET_SKILLS',
    skills: [],
  });
});

test('should fetch skills from the server', done => {
  const store = createMockStore();
  store.dispatch(startSetSkills()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_SKILLS',
      skills,
    });
    done();
  });
});
