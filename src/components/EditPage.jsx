import React from "react";
import {useParams} from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import { useHistory } from "react-router-dom";

export const EditPage = (props) => {
  let history = useHistory();
  let {id} = useParams();
  const expense = useSelector((state) => state.expenses.find((expense) => (expense.id === id)));

  return(
    <div>
      <ExpenseForm
        expense={expense} 
        onSubmit={(expense) => {
          props.onSubmit(id, expense);
          history.push('/');
        }
        }
      />
      <button onClick={
            () => {
                props.onRemove({id});
                history.push('/');
            }
        }>Remove</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   let {id} = useParams();
//   return{
//     expense: state.expenses.find((expense) => (expense.id === id))
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  onSubmit : (id, expense) => dispatch(editExpense(id, expense)),
  onRemove: ({id}) => dispatch(removeExpense({id}))
});

export default connect(undefined,mapDispatchToProps)(EditPage);
// export default EditPage;