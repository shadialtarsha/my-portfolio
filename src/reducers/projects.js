const projectsReducerDefaultState = [];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
