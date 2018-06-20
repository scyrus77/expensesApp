import expensesReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses";
import moment from "moment";
import uuid from "uuid";

test('should setup default expenses values', () => {
  const state = expensesReducer(undefined, { type: '&&INIT' });
  expect(state).toEqual([]);
});

test('should remove Expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  });
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove Expense if id not found', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  });
  expect(state).toEqual(expenses);
});

test('should add an Expense', () => {
  const expense = {
    id: '99',
    description: 'Test desc',
    note: 'note 99',
    amount: 100,
    createdAt: 0
  };
  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an Expense', () => {
  const expense = {
    description: 'Test desc',
    note: 'note 99',
    amount: 100,
    createdAt: 0
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: expense
  });
  expect(state[1]).toEqual({ ...expense, id: expenses[1].id });
});

test('should not edit an Expense if id not found', () => {
  const expense = {
    description: 'Test desc',
    note: 'note 99',
    amount: 100,
    createdAt: 0
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: expense
  });
  expect(state).toEqual(expenses);
});

