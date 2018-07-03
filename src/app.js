import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history }  from "./routers/AppRouter";
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';
// import './playground/promises';

const store = configureStore();

store.subscribe(() => {
  const {expenses, filters} = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

const mainView = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(mainView, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged( user => {
  if (user) {
    console.log('log in');
    console.log('history.location', history.location);
    store.dispatch(startSetExpenses())
      .then(() => {
        renderApp();
      });
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    console.log('log out');
    renderApp();
    history.push('/');
  }
});
