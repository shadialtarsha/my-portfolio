import filterProjects from '../../selectors/filterProjects';
import projects from '../fixtures/projects';

test('should return all projects when no filter', () => {
  expect(filterProjects(projects)).toEqual(projects);
});

test('should return the correct projects that have a tag similar to the filter', () => {
  expect(filterProjects(projects, 'ReactJS')).toEqual([projects[0], projects[1]]);
});
