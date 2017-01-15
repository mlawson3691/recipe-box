import React, { Component } from 'react';
import './App.css';

export default class AddRecipeComponent extends Component {

  constructor(props) {
    super(props);

    this.addRecipe = this.addRecipe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateInstructions = this.updateInstructions.bind(this);

    this.state = {
      showForm: false,
      newName: '',
      newIngredients: [],
      newInstructions: []
    };
  }

  toggleForm(event) {
    event.stopPropagation();
    var value = !this.state.showForm;
    this.setState({showForm: value});
  }

  updateName(event) {
    this.setState({newName: event.target.value});
  }

  updateIngredients(event) {
    var string = event.target.value;
    var arr = string.split('\n');
    this.setState({newIngredients: arr});
  }

  updateInstructions(event) {
    var string = event.target.value;
    var arr = string.split('\n');
    this.setState({newInstructions: arr});
  }

  addRecipe(event) {
    event.preventDefault();
    this.props.addRecipe(this.state.newName, this.state.newIngredients, this.state.newInstructions);
    this.setState({showForm: false});
  }

  render() {
    return (
      <div>
        {!this.state.showForm ? (
          <div id='addBtn' className='btn' onClick={this.toggleForm.bind(this)}>Add a New Recipe</div>
        ) : (
          <form id='addForm' onSubmit={this.addRecipe}>
            <div className='form-header'>
              Add a New Recipe
              <span onClick={this.toggleForm.bind(this)}>X</span>
            </div>
            <div>
              <label>
                Recipe Name:
                <input type='text' onChange={this.updateName} />
              </label>
            </div>
            <div>
              <label>
                Ingredients (enter one per line):
                <textarea onChange={this.updateIngredients} />
              </label>
            </div>
            <div>
              <label>
                Instructions (enter one per line):
                <textarea onChange={this.updateInstructions} />
              </label>
            </div>
            <div>
              <input className='btn' type='submit' value='Add Recipe' />
            </div>
          </form>
        )}
      </div>
    );
  }
}
