import React, { Component } from 'react';
import './App.css';

export default class EditRecipeComponent extends Component {

  constructor(props) {
    super(props);

    this.editRecipe = this.editRecipe.bind(this);
    this.editName = this.editName.bind(this);
    this.editIngredients = this.editIngredients.bind(this);
    this.editInstructions = this.editInstructions.bind(this);

    this.state = {
      editedName: this.props.selectedRecipe.name,
      editedIngredients: this.props.selectedRecipe.ingredients,
      editedInstructions: this.props.selectedRecipe.instructions
    };
  }

  editName(event) {
    var newName = event.target.value;
    this.setState({editedName: newName});
  }

  editIngredients(event) {
    var newIngredients = event.target.value.split('\n');
    this.setState({editedIngredients: newIngredients});
  }

  editInstructions(event) {
    var newInstructions = event.target.value.split('\n');
    this.setState({editedInstructions: newInstructions});
  }

  editRecipe(event) {
    event.preventDefault();
    this.props.editRecipe(this.state.editedName, this.state.editedIngredients, this.state.editedInstructions);
  }

  render() {
    return (
      <form id='editForm' onSubmit={this.editRecipe}>
        <div>
          <label>
            Recipe Name:
            <input type='text' defaultValue={this.props.selectedRecipe.name} onChange={this.editName} />
          </label>
        </div>
        <div>
          <label>
            Ingredients (enter one per line):
            <textarea defaultValue={this.props.selectedRecipe.ingredients.join('\n')} onChange={this.editIngredients} />
          </label>
        </div>
        <div>
          <label>
            Instructions (enter one per line):
            <textarea defaultValue={this.props.selectedRecipe.instructions.join('\n')} onChange={this.editInstructions} />
          </label>
        </div>
        <div>
          <input className='btn' type='submit' value='Edit Recipe' />
        </div>
      </form>
    );
  }
}
