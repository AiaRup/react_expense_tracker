import React, { Component } from 'react';

class Expense extends Component {

  render() {
    return (
      <div className="singleExpense">
        <p className="icons">
          <i className="fa fa-trash-o" onClick={this.props.onRemove}></i>
          <i className="fa fa-pencil-square-o" onClick={this.props.toggleForm}></i>
        </p>
        <p>Amount: ${this.props.amt}</p>
        <p>Category: {this.props.cat}</p>
        <p>Description: {this.props.descr}</p>
      </div>
    );
  }
}

export default Expense;

