import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADDEXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVEEXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDITEXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});

//SETTEXTFILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//SETSORTBYFILTER
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

//SETSTARTDATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SETENDDATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const demoState = {
    expenses: [{
        id: 'pasdc84sd857',
        description: 'Jan months rent',
        note: 'Last installment for this address',
        amount: 5800,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

//Expense State default
const expensesReducerDefaultState = [];

//Filters State default
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expenses];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default: 
            return state;
    }
};

//Filters Reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else{
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//Combine Reducers to store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

//Subscribing the Store
const unsubscriber = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 4000,
    createdAt: 100
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 25,
    createdAt: 300
}));

// store.dispatch(removeExpense({
//     id: expenseOne.expenses.id
// }));

// const expenseThree = store.dispatch(addExpense({
//     description: 'Grocery',
//     amount: 1500
// }));

store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 5000 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(95));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));