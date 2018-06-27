export default (expenses = []) => {
  return expenses.reduce(( total, { amount = 0 }) => total + amount, 0);
}
