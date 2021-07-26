import { v4 as uuidv4 } from 'uuid';

//ADDEXPENSE
export const addExpense = (
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
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDITEXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});
