import React, { Component } from 'react';
import './App.css';

export default class DisplayComponent extends Component {

  render() {
    return (
      <div id='display'>
        <h3 className='name'>{this.props.selectedRecipe.name}</h3>
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
      </div>
    );
  }
}
