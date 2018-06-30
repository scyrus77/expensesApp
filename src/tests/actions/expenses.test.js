import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const expenseData = expenses[0];
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenseData
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {...expenses[0]};
  delete expenseData.id;
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});

  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultExpenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpenseData);
      done();
    });
});

// test('should setup addExpense action object with default values', () => {
//   const expenseData = {
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   };
//   const action = addExpense({});
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });

