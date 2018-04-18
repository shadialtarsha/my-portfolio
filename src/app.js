import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import LoadingPage from './components/LoadingPage';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { startSetSkills } from './actions/skills';
import { startSetProjects } from './actions/projects';
import './styles/styles.scss';

const store = configureStore();
let hasRender = false;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const renderApp = () => {
  if (!hasRender) {
    setTimeout(() => {
      ReactDOM.render(jsx, document.querySelector('#app'));
      hasRender = true;
    }, 3000);
  }
};

ReactDOM.render(<LoadingPage />, document.querySelector('#app'));

store
  .dispatch(startSetSkills())
  .then(() => store.dispatch(startSetProjects()))
  .then(() => renderApp())
  .catch(e => console.log(e));
