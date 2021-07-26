import React from "react";
import { connect } from 'react-redux';
import { addExpense } from "../actions/expenses";
import ExpenseForm from './ExpenseForm';
import { useHistory } from 'react-router-dom';


export const AddPage = (props) => {
  let history = useHistory(); 
  return(
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.onSubmit(expense);
          history.push('/');
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddPage);
