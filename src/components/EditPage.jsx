import React from "react";
import {useParams} from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { useHistory } from "react-router-dom";
import { history } from "../routers/AppRouter";

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
          history.push('/dashboard');
        }
        }
      />
      <button onClick={
            () => {
                props.onRemove({id});
                history.push('/dashboard');
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
  onSubmit : (id, expense) => dispatch(startEditExpense(id, expense)),
  onRemove: ({id}) => dispatch(startRemoveExpense({id}))
});

export default connect(undefined,mapDispatchToProps)(EditPage);
// export default EditPage;