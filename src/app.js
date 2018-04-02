import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import AppRouter from './routes/AppRouter';
import './styles/styles.scss';

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.querySelector('#app'));
