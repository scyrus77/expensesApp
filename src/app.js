import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const {expenses, filters} = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 23200 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 16600, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 134500 }));

// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('app')
);

