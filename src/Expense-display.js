import React, { Component } from 'react';
// import React from 'react';
import Expense from './Expense';

class ExpenseDisplay extends Component {
  constructor(props) {
    super(props);
  }

  onRemove(index, e) {
    this.props.removeExpense(index);
  }

  render() {
    return (
      <div>
        {this.props.expenses.map((expense, index) => {
          return (
            <Expense key={index} {...expense} onRemove={this.onRemove.bind(this, index)} indexExpense={index} editExpense={this.props.editExpense}/>
          );
        })}
      </div>
    );
  }
}


// const ExpenseDisplay = (props) => {

//   const onRemove = (index) => props.removeExpense(index);

//   return (
//     <div>
//       {props.expenses.map((expense, index) => {
//         return (
//           <Expense key={index} {...expense} onRemove={onRemove(index, props)} indexExpense={index} editExpense={props.editExpense}/>
//         );
//       })}
//     </div>
//   );
// };

export default ExpenseDisplay;