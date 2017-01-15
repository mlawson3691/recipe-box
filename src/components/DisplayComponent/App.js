import React, { Component } from 'react';
import EditRecipeComponent from './../EditRecipeComponent/App.js';
import AddRecipeComponent from './../AddRecipeComponent/App.js';
import './App.css';

export default class DisplayComponent extends Component {

  constructor(props) {
    super(props);

    this.editRecipe = this.editRecipe.bind(this);
  }

  toggleEdit(event) {
    event.stopPropagation();
    var value = !this.props.showEditForm;
    this.props.toggleEditForm(value);
  }

  editRecipe(name, ingredients, instructions) {
    this.props.editRecipe(name, ingredients, instructions);
    this.props.toggleEditForm(false);
  }

  deleteRecipe(event) {
    event.stopPropagation();
    this.props.deleteRecipe(this.props.selectedRecipe);
    if (this.props.showEditForm) {
      this.props.toggleEditForm(false);
    }
  }

  render() {
    return (
      <div id='display'>
        {this.props.selectedRecipe === null && !this.props.showAddForm &&
          <h4>Select a recipe to view from the list</h4>
        }
        {this.props.selectedRecipe !== null && !this.props.showAddForm &&
          <h3 className='name'>
            {this.props.selectedRecipe.name}
            <img onClick={this.deleteRecipe.bind(this)} src='./images/delete.svg' alt='Delete Icon' />
            <img onClick={this.toggleEdit.bind(this)} src='./images/edit.svg' alt='Edit Icon' />
          </h3>
        }
        {this.props.selectedRecipe && !this.props.showEditForm && !this.props.showAddForm &&
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
        {this.props.selectedRecipe && this.props.showEditForm && !this.props.showAddForm &&
          <div id='details'>
            <EditRecipeComponent
              selectedRecipe={this.props.selectedRecipe}
              editRecipe={this.editRecipe}
            />
          </div>
        }
        {this.props.showAddForm &&
          <AddRecipeComponent
            addRecipe={this.props.addRecipe}
          />
        }
      </div>
    );
  }
}
