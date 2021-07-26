import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('Should test remove expense generator with action object values', () => {
    const action = removeExpense({id: '1abc123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id : '1abc123'
    });
});

test('Should test edit expense generator with action object values', () => {
    const action = editExpense('12ab12', {
        description: 'Edited Description',
        note: 'Some Note',
        amount: 1233.25,
        createdAt: 100
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12ab12',
        updates: {
            description: 'Edited Description',
            note: 'Some Note',
            amount: 1233.25,
            createdAt: 100
        }});

});

test('Should test add expense generator with action object values', () => {
    const expenseData = {
        description: 'Add Expense 1',
        note: 'Some Note',
        amount: 1000.23,
        createdAt: 789
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should test add expense generator with action object default values', () => {
    const expenseData = {};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});