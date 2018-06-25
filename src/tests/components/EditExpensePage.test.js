import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy;
let removeExpenseSpy;
let historySpy;
let wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={ expenses[0] }
      editExpense={ editExpenseSpy }
      removeExpense={ removeExpenseSpy }
      history={ historySpy }
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  const data = {...expenses[0]};
  const id = data.id;
  expect(editExpenseSpy).toHaveBeenLastCalledWith(id, data);
});

test('should handle onDelete', () => {
  wrapper.find('ExpenseForm').prop('onDelete')();
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  const data = {...expenses[0]};
  const id = data.id;
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: id });
});
