import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className='page-header__title'>
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{"₹" + numeral(expenseTotal).format("0,0.00")}</span>
        </h1>
        <div className='page-header__actions'>
            <Link to='/create' className='button'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpense.length,
    expenseTotal: getExpensesTotal(visibleExpense),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
