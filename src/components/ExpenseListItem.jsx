import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ description, id, createdAt, amount }) => (
  <Link to={`/edit/${id}`} className='list-item'>
    <div>
      <h3 className='list-item__title'>{description}</h3>
      <p className='list-item__sub-title'>{moment(createdAt).format("MMM Do, YYYY")}</p>
    </div>
    <div>
      <h3 className='list-item__data'>{"₹" + numeral(amount).format("0,0.00")}</h3>
    </div>
  </Link>
);

export default ExpenseListItem;
