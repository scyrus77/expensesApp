import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map(expense => (<ExpenseListItem  key={ expense.id } { ...expense } />))
    }
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: selectExpenses(expenses, filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);

