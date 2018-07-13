import React, { Component } from 'react';
import Expense from './Expense';
import ExpenseForm from './Expense-form';

class ExpenseDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    let toggleState = this.state.isEdit ? false : true;
    this.setState({ isEdit: toggleState });
  }

  onRemove(index, e) {
    this.props.removeExpense(index);
  }

  render() {
    return (
      <div>
        {this.props.expenses.map((expense, index) => {
          return (
            <React.Fragment key={index}>
              <Expense key={index} {...expense} onRemove={this.onRemove.bind(this, index)} toggleForm={this.toggleForm} />
              { this.state.isEdit && <ExpenseForm addButton={false} indexExpense={index} editExpense={this.props.editExpense} /> }
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default ExpenseDisplay;