import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

store.subscribe(() => {
  const {expenses, filters} = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

// store.dispatch(addExpense({ description: 'Water bill', amount: 23200 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 16600, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 134500 }));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('app')
);

