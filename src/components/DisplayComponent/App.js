import React, { Component } from 'react';
import EditRecipeComponent from './../EditRecipeComponent/App.js';
import './App.css';

export default class DisplayComponent extends Component {

  constructor(props) {
    super(props);

    this.editRecipe = this.editRecipe.bind(this);

    this.state = {
      edit: false
    };
  }

  toggleEdit(event) {
    event.stopPropagation();
    var value = !this.state.edit;
    this.setState({edit: value});
  }

  editRecipe(name, ingredients, instructions) {
    this.props.editRecipe(name, ingredients, instructions);
    this.setState({edit: false});
  }

  deleteRecipe(event) {
    event.stopPropagation();
    this.props.deleteRecipe(this.props.selectedRecipe);
    if (this.state.edit) {
      this.setState({edit: false});
    }
  }

  render() {
    return (
      <div id='display'>
        {this.props.selectedRecipe === null ? (
          <h4>Select a recipe to view from the list</h4>
        ) : (
          <h3 className='name'>
            {this.props.selectedRecipe.name}
            <img onClick={this.deleteRecipe.bind(this)} src='./images/delete.svg' alt='Delete Icon' />
            <img onClick={this.toggleEdit.bind(this)} src='./images/edit.svg' alt='Edit Icon' />
          </h3>
        )}
        {this.props.selectedRecipe && !this.state.edit &&
          <div id='details'>
            <h5>Ingredients</h5>
            <ul>
              {this.props.selectedRecipe.ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>{ingredient}</li>
                );
              }, this)}
            </ul>
            <h5>Instructions</h5>
            <ol>
              {this.props.selectedRecipe.instructions.map((instruction, index) => {
                return (
                  <li key={index}>{instruction}</li>
                );
              }, this)}
            </ol>
          </div>
        }
        {this.props.selectedRecipe && this.state.edit &&
          <div id='details'>
            <EditRecipeComponent
              selectedRecipe={this.props.selectedRecipe}
              editRecipe={this.editRecipe}
            />
          </div>
        }
      </div>
    );
  }
}
