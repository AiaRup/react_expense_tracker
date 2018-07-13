import React, { Component } from 'react';
import SingleInput from './Single-input';

class ExpenseForm extends Component {
  constructor(props){
    super(props);
    this.state = { amt: 0, cat: '', descr: '' };
    // this.index = this.props.inputIndex;
    this.onBtnClick = this.onBtnClick.bind(this);
    this.changeExpense = this.changeExpense.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  changeExpense(e){
    this.setState({ [e.target.id]: e.target.value });
  }

  onBtnClick(){
    this.props.addExpense(this.state);
    this.setState({ amt: 0, cat: '', descr: '' }, () => {
    });
  }

  handleEdit() {
    this.props.editExpense(this.props.indexExpense, this.state);
    this.setState({ amt: 0, cat: '', descr: '' }, () => {
    });
  }

  render() {
    return (
      <div>
        <form>
          <SingleInput id="amt" type="number" placeholder="$" content={this.state.amt} controlFunc={this.changeExpense}/>
          <SingleInput id="cat" type="text" placeholder="Category" content={this.state.cat} controlFunc={this.changeExpense}/>
          <SingleInput id="descr" type="text" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense}/>
          {this.props.addButton ?
            <button type="button" className="btn btn-primary" onClick={this.onBtnClick}>Add Expense</button> :
            <button type="button" className="btn btn-primary" onClick={this.handleEdit}>Save</button> }
        </form>
      </div>
    );
  }
}

export default ExpenseForm;