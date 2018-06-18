import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should setup setEndDate action object', () => {
  const endDate = moment(0);
  expect(setEndDate(endDate)).toEqual({
    type: 'SET_END_DATE',
    endDate: endDate
  });
});

test('should setup setStartDate action object', () => {
  const startDate = moment(0);
  expect(setStartDate(startDate)).toEqual({
    type: 'SET_START_DATE',
    startDate: startDate
  });
});

test('should setup setTextFilter action object', () => {
  expect(setTextFilter('test-text')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test-text'
  });
});

test('should setup setTextFilter action object with default', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup sortByDate action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});


