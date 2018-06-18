import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup editExpense action object', () => {
  expect(editExpense(
    123,
    {
      amount: 500
    }
  )).toEqual({
    type: 'EDIT_EXPENSE',
    id: 123,
    updates: {
      amount: 500
    }
  });
});

test('should setup removeExpense action object', () => {
  expect(removeExpense({ id: '123' }) ).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Pay Bill',
    note: 'My Note',
    amount: 76500,
    createdAt: 23456789
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

