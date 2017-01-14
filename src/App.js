import React, { Component } from 'react';
import ListComponent from './components/ListComponent/App.js';
import DisplayComponent from './components/DisplayComponent/App.js';
import AddRecipeComponent from './components/AddRecipeComponent/App.js';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.chooseRecipe = this.chooseRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);

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

  chooseRecipe(recipe, e) {
    this.setState({selectedRecipe: recipe})
  }

  addRecipe(name, ingredients, instructions) {
    var recipesArray = this.state.recipes;
    recipesArray.push({
      'name': name,
      'ingredients': ingredients,
      'instructions': instructions
    });

    function alphabetize(a,b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }

    recipesArray = recipesArray.sort(alphabetize);

    this.setState({recipes: recipesArray});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Recipe Box</p>
        </div>
        <div className="App-body">
          <AddRecipeComponent
            addRecipe={this.addRecipe}
          />
          <ListComponent
            recipes={this.state.recipes}
            selectedRecipe={this.state.selectedRecipe}
            chooseRecipe={this.chooseRecipe}
          />
          <DisplayComponent
            selectedRecipe={this.state.selectedRecipe}
          />
        </div>
      </div>
    );
  }
}
