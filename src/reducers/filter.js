const filterReducerDefaultState = 'show all';

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
