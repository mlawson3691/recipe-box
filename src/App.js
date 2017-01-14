import React, { Component } from 'react';
import ListComponent from './components/ListComponent/App.js';
import DisplayComponent from './components/DisplayComponent/App.js';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: {
        'name': 'Brownies',
        'ingredients': ['butter', 'sugar', 'eggs', 'flour', 'chocolate'],
        'instructions': ['mix butter and sugar', 'add eggs', 'stir in flour and chocolate', 'bake']
      },
      recipes: [
        {
          'name': 'Brownies',
          'ingredients': ['butter', 'sugar', 'eggs', 'flour', 'chocolate'],
          'instructions': ['mix butter and sugar', 'add eggs', 'stir in flour and chocolate', 'bake']
        },
        {
          'name': 'Mixed Berry Smoothie',
          'ingredients': ['strawberries', 'blueberries', 'raspberries', 'yogurt', 'honey'],
          'instructions': ['add all ingredients to blender', 'blend until smooth']
        },
        {
          'name': 'Rustic Bread',
          'ingredients': ['yeast', 'water', 'sugar', 'salt', 'flour'],
          'instructions': ['mix yeast, water, and sugar', 'add flour and salt', 'knead for 10 min', 'proof dough', 'form and bake']
        },
        {
          'name': 'Veggie Fried Rice',
          'ingredients': ['rice', 'soy sauce', 'eggs', 'onion', 'carrot', 'zucchini', 'mushrooms', 'butter'],
          'instructions': ['cook rice', 'stir fry remaining ingredients', 'add rice to stir fry', 'season with soy sauce and add butter']
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Recipe Box</p>
        </div>
        <div className="App-body">
          <ListComponent
            recipes={this.state.recipes}
          />
          <DisplayComponent
            selectedRecipe={this.state.selectedRecipe}
          />
        </div>
      </div>
    );
  }
}
