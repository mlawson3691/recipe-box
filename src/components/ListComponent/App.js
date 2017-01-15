import React, { Component } from 'react';
import './App.css';

export default class ListComponent extends Component {

  chooseRecipe(recipe, e) {
    this.props.chooseRecipe(recipe);
  }

  addClicked() {
    this.props.addClicked();
  }

  render() {
    return (
      <div id='list'>
        <h3>Choose a recipe</h3>
        {this.props.recipes.map( (recipe, index) => {
          return (
            <div key={index} className='recipe' onClick={this.chooseRecipe.bind(this, recipe)}>
              {recipe.name}
            </div>
          );
        }, this)}
        <div className='recipe addButton' onClick={this.addClicked.bind(this)}>Add a New Recipe</div>
      </div>
    );
  }
}
