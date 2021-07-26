import { sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter } from "../../actions/filters";
import moment from 'moment';

test('Should test Text Filter generator to see object action values', () => {
    const action = setTextFilter('Shridhar');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'Shridhar'
    });
});

test('Should test Text Filter generator to see object action default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('Should test SortBy Amount Filter generator to see object action values', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORTBY_AMOUNT'
    });
});

test('Should test sortBy Date Filter generator to see object action values', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORTBY_DATE'
    });
});

test('Should test SetStartDate Filter generator to see object action values', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test('Should test SetEndDate Filter generator to see object action values', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});