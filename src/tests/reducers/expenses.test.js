import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should return default state from the expenses Reducer', () => {
    const action = { type: '@@INIT'};
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('Should return the state after remove action from the expenses Reducer', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '1' };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[1],
        expenses[2]
    ]);
});

test('Should return the same state if no id was entered or incorrect id was entered', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '-1'});
    expect(state).toEqual(expenses);
});

test('Should return state with added element from the expenses Reducer',() => {
    const addState = {
        id: '10',
        description: 'Coffee',
        note: '',
        amount: 100.50,
        createdAt: moment()
    };
    const action = { type: 'ADD_EXPENSE', expenses: { ...addState } };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, addState]);
});

test('Should edit the element from expenses if id is available', () => {
    const expense = {
        description: 'Credit Card Bill',
        note: '',
        amount: 4500.50,
        createdAt: moment()
    };
    const action = { type: 'EDIT_EXPENSE', id: '3', updates: { ...expense }}
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], { ...expenses[2], ...expense}]);
});

test('Should not edit the element from state if id not available from the expenses Reducer', () => {
    const action = {type: 'EDIT_EXPENSE', id:'15', updates: { description: 'Chai'}};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});