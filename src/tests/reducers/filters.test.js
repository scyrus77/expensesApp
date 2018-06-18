import filtersReducer from '../../reducers/filters';
import moment from "moment/moment";

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '&&INIT' });
  const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  expect(state).toEqual(filtersReducerDefaultState);
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testText' });
  expect(state.text).toBe('testText');
});

test('should set startDate filter', () => {
  const startDate = moment(0);
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment(0);
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toBe(endDate);
});

