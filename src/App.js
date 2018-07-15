import React, { Component } from 'react';
import './App.css';
import ExpenseForm from './Expense-form';
import ExpenseDisplay from './Expense-display';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expenses: [],
      ascending: true };
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.sortExpenses = this.sortExpenses.bind(this);
  }

  addExpense(expense) {
    this.setState({ expenses: this.state.expenses.concat(expense) });
  }

  removeExpense(indexToRemove) {
    let filteredArray = this.state.expenses.filter((expense, index) => index !== indexToRemove);
    this.setState({ expenses: filteredArray });
  }

  editExpense(indexToUpdate, expenseToUpdate) {
    let EditedArray = this.state.expenses.map((expense, index) => {
      return  index === indexToUpdate ? expenseToUpdate : expense;
    });
    this.setState({ expenses: EditedArray });
  }

  sortExpenses() {
    let sortedArray = this.state.expenses;
    let sortDirection = this.state.ascending ? false : true;
    sortedArray.sort((a, b) => {
      return sortDirection ?  a.amt > b.amt : a.amt < b.amt;
    });
    this.setState({
      expenses: sortedArray,
      ascending: sortDirection });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">My Expenses</h1>
        <div className="container">
          <ExpenseForm addExpense={this.addExpense} addButton={true} />
          <button type="button" className="btn btn-warning" onClick={this.sortExpenses}>Sort</button>
          <ExpenseDisplay expenses={this.state.expenses} removeExpense={this.removeExpense} editExpense={this.editExpense}/>
        </div>
      </div>
    );
  }
}

export default App;







