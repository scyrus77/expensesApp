import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends Component {

  state = {
    calendarFocused: null,
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState( () => ({calendarFocused}) );
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    // console.log('Select onChange', e.target.value);
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else if (e.target.value === 'date') {
      this.props.sortByDate();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={ this.props.filters.text }
          onChange={ this.onTextChange }
        />
        <select
          value={ this.props.filters.sortBy }
          onChange={ this.onSortChange }
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={ this.props.filters.startDate }
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={ this.props.filters.endDate } // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={ this.onDatesChange }
          focusedInput={ this.state.calendarFocused }
          onFocusChange={ this.onFocusChange }
          showClearDates={ true }
          numberOfMonths={ 1 }
          isOutsideRange={ () => false }
        />

      </div>
    )
  }

}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchProps = (dispatch) => ({
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
});

export default connect(mapStateToProps, mapDispatchProps)(ExpenseListFilters);
