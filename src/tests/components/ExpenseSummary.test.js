import React from 'react'
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={ expenses } />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={ [] } />);
  expect(wrapper).toMatchSnapshot();
});

