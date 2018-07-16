import React from 'react';
import Expense from './Expense';

const ExpenseDisplay = (props) => {
  return (
    <div>
      {props.expenses.map((expense, index) => {
        return (
          <Expense key={index} {...expense} removeExpense={props.removeExpense} indexExpense={index} editExpense={props.editExpense}/>
        );
      })}
    </div>
  );
};

export default ExpenseDisplay;