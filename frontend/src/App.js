import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // deixa disponivel o store pra todos
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import history from './services/history';
/* Router fica ouvindo as informações que vao acontecer nesse history, se fizer
alteração no services api o reactrouter dom vai ouvir essas alterações e vai
fazer a navegação delas automaticamente. */
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
