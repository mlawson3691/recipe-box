import React, { Component } from 'react';
import './App.css';

export default class ListComponent extends Component {

  chooseRecipe(recipe, e) {
    this.props.chooseRecipe(recipe);
  }

  render() {
    return (
      <div id='list'>
        <h3>Choose a recipe</h3>
        <hr />
        {this.props.recipes.map( (recipe, index) => {
          return (
            <div key={index}>
              <div className='recipe' onClick={this.chooseRecipe.bind(this, recipe)}>{recipe.name}</div>
              <hr />
            </div>
          );
        }, this)}
      </div>
    );
  }
}
