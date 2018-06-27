import expenses from "../fixtures/expenses";
import selectExpensesTotal from '../../selectors/expenses-total';

test('should correctly add up multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});

test('should correctly add up single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

