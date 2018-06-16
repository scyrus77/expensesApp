import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={ props.expense }
        onSubmit={(expense) => {
          console.log('EditExpensePage', props, expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
        onDelete={() => {
          console.log('EditExpensePage onDelete');
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find( expense => expense.id === props.match.params.id )
  }
};

export default connect(mapStateToProps)(EditExpensePage);

