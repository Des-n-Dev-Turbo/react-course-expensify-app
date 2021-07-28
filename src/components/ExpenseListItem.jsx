import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({description, id, createdAt, amount}) => (
    <div>
        <Link to={`/edit/${id}`} ><h4>{description}</h4></Link>
        <p>{"₹" + numeral(amount).format('0,0.00')} - {moment(createdAt).format("MMM Do, YYYY")}</p>
        
    </div>
);


export default ExpenseListItem;