import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = (props) => (
  <div>
    <h1>Expenses Summary</h1>
    <div>
      Viewing { props.expenses.length }
      { props.expenses.length > 1 ? ' expenses ' : ' expense ' }
      totalling { numeral(selectExpensesTotal(props.expenses)).format('$0,0.00') } </div>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: selectExpenses(expenses, filters)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);


