import React from "react";
import { connect } from 'react-redux';
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from './ExpenseForm';
import { useHistory } from 'react-router-dom';
import { history } from "../routers/AppRouter";


export const AddPage = (props) => {
  let history = useHistory(); 
  return(
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.onSubmit(expense);
          history.push('/dashboard');
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddPage);
