import React, { Component } from 'react';
import './App.css';

export default class AddRecipeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  toggleForm(event) {
    event.stopPropagation();
    var value = !this.state.showForm;
    this.setState({showForm: value});
  }

  render() {
    return (
      <div>
        <div id='addBtn' onClick={this.toggleForm.bind(this)}>Add a New Recipe</div>
        {this.state.showForm &&
          <div id='addForm'>
            FORM
          </div>
        }
      </div>
    );
  }
}
