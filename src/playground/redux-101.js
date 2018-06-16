import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( { count } ) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers

const countRedducers = ((state = {count: 0}, action) => {
  console.log('store', state, action);
  switch (action.type) {
    case 'SET':
      const count =
        typeof action.count === 'number' ? action.count : undefined;
      if (count) {
        return { count };
      }
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const store = createStore(countRedducers);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 3}));

// unsubscribe();

store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(setCount({count: 101}));


