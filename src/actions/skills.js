// import fetch from 'node-fetch';

export const setSkills = (skills = []) => ({
  type: 'SET_SKILLS',
  skills,
});

export const startSetSkills = () => dispatch => {
  const url = 'https://shadi-my-portfolio.herokuapp.com/api/skills';
  return fetch(url)
    .then(response => response.json())
    .then(data => dispatch(setSkills(data.skills)))
    .catch(e => console.log(e));
};
