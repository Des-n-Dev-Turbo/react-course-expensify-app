import moment from 'moment';
//Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt)) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt)) : true ;
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