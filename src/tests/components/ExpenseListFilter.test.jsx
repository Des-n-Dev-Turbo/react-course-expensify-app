import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter 
        filters={filters}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('Should render Expense list filter',() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render Expense list filter with alt values ',() => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle text changes',() => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date changes',() => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount changes',() => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',() => {
   const startDate = moment(0).add(4, 'years');
   const endDate = moment(0).add(8, 'years');
   wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',() => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});