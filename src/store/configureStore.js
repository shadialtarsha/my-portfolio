import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import skillsReducer from '../reducers/skills';
import projectsReducer from '../reducers/projects';
import filterReducer from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      skills: skillsReducer,
      projects: projectsReducer,
      filter: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
