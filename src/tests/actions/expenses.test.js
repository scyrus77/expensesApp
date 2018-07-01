import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData)
    .then(() => done());
});


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

test('should edit expense in the database', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = { amount: 500 };
  // console.log('test StartEditExpense updates', updates);
  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database.ref(`expenses/${id}`).once('value');
    })
    .then( snapshot => {
      const val = snapshot.val();
      // console.log('test StartEditExpense', val);
      expect(val.amount).toBe(updates.amount);
      done();
    });
});

test('should setup removeExpense action object', () => {
  expect(removeExpense({ id: '123' }) ).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should remove an expense from the database', (done) => {
  const store = createMockStore({});
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value')
    }).then( snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should setup setExpenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from the database', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
  });
});

