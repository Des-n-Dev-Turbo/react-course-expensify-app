import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const  ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses"
    return(
        <div>
            <h3>Viewing {expenseCount} {expenseWord} totalling { "₹" + numeral(expenseTotal).format('0,0.00') } </h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpense.length,
        expenseTotal: getExpensesTotal(visibleExpense) 
    };
};

export default connect(mapStateToProps)(ExpensesSummary);