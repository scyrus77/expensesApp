import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing { expensesCount } { expenseWord } totalling { formattedExpensesTotal }
      </h1>
    </div>
  );

};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = selectExpenses(expenses, filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
