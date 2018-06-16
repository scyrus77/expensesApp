const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  // console.log('expenseReducer', action);
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      console.log('REMOVE_EXPENSE', action);
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
      console.log('EDIT_EXPENSE', action);
      return state.map( expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }

};
