const skillsReducerDefaultState = [];

const skillsReducer = (state = skillsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return action.skills;
    default:
      return state;
  }
};

export default skillsReducer;
