import React, { Component } from 'react';
import './App.css';

export default class ListComponent extends Component {

  render() {
    return (
      <div id='list'>
        <h3>Choose a recipe</h3>
        <hr />
        {this.props.recipes.map( (recipe) => {
          return (
            <div>
              <div className='recipe'>{recipe.name}</div>
              <hr />
            </div>
          );
        }, this)}
      </div>
    );
  }
}
