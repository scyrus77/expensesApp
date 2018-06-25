import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {

  onSubmit = (expense) => {
    // console.log('EditExpensePage', this.props, expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onDelete = () => {
    // console.log('EditExpensePage onDelete');
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={ this.onSubmit }
          onDelete={ this.onDelete }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find( expense => expense.id === props.match.params.id )
  }
};

const mapDispatchProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchProps())(EditExpensePage);
