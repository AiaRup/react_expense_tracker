import React, { Component } from 'react';
import ExpenseForm from './Expense-form';

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    let toggleState = this.state.isToggle ? false : true;
    this.setState({ isToggle: toggleState });
  }

  render() {
    return (
      <div className="singleExpense">
        <p className="icons">
          <i className="fa fa-trash-o" onClick={this.props.onRemove}></i>
          <i className="fa fa-pencil-square-o" onClick={this.toggleForm}></i>
        </p>
        <p>Amount: ${this.props.amt}</p>
        <p>Category: {this.props.cat}</p>
        <p>Description: {this.props.descr}</p>
        { this.state.isToggle && <ExpenseForm addButton={false} indexExpense={this.props.indexExpense} editExpense={this.props.editExpense} /> }
      </div>
    );
  }
}

export default Expense;

