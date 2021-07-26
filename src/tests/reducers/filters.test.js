import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should test the default filter from the reducer', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should test sortBy Amount filter from the reducer', () => {
    const state = filtersReducer(undefined, {type: 'SORTBY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should test sortBy date filter from the reducer', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SORTBY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should test text filter from the reducer',() => {
    const action = { type: 'SET_TEXT', text: 'Rent'};
    const state =  filtersReducer(undefined, action);
    expect(state.text).toBe('Rent');
});

test('Should test startDate filter from the reducer', () => {
    const action = {type: 'SET_START_DATE', startDate: moment(0)};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('Should test endDate filter from the reducer', () => {
    const action = {type: 'SET_END_DATE', endDate: moment(0)};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});