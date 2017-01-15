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
      newName: '',
      newIngredients: [],
      newInstructions: [],
      error: null
    };
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
    if (this.state.newName === '' || this.state.newIngredients[0] == false || this.state.newInstructions[0] == false) {
      this.setState({error: 'Error: You must complete all fields before submitting your recipe'});
    } else {
      this.props.addRecipe(this.state.newName, this.state.newIngredients, this.state.newInstructions);
      this.setState({showForm: false});
      this.setState({error: null});
    }
  }

  render() {
    return (
      <form id='addForm' onSubmit={this.addRecipe}>
        <div className='form-header'>
          Add a New Recipe
        </div>
        {this.state.error &&
          <div className='error'>
            {this.state.error}
          </div>
        }
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
    );
  }
}
