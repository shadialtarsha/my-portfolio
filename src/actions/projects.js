// import fetch from 'node-fetch';

export const setProjects = (projects = []) => ({
  type: 'SET_PROJECTS',
  projects,
});

export const startSetProjects = () => dispatch => {
  const url = 'http://shadialtarsha.com/api/projects';
  return fetch(url)
    .then(response => response.json())
    .then(data => dispatch(setProjects(data.projects)))
    .catch(e => console.log(e));
};
