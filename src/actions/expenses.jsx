import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebase/firebase';

//ADDEXPENSE
export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

export const startAddExpense = (expensesData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expensesData;
        const expenses = {description, note, amount, createdAt};
        database.ref('expenses').push(expenses).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenses
            }));
        });        
    };
};

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
