import React, { Component } from 'react';
import ListComponent from './components/ListComponent/App.js';
import DisplayComponent from './components/DisplayComponent/App.js';
import AddRecipeComponent from './components/AddRecipeComponent/App.js';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.chooseRecipe = this.chooseRecipe.bind(this);
    this.addClicked = this.addClicked.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.state = {
      showAddForm: false,
      showEditForm: false,
      selectedRecipe: null,
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
    this.setState({selectedRecipe: recipe});
    this.setState({showAddForm: false});
    this.setState({showEditForm: false});
  }

  addClicked() {
    this.setState({showAddForm: true});
  }

  addRecipe(name, ingredients, instructions) {
    var newRecipe = {
      'name': name,
      'ingredients': ingredients,
      'instructions': instructions
    };
    var recipesArray = this.state.recipes;
    recipesArray.push(newRecipe);

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
    this.setState({selectedRecipe: newRecipe});
    this.setState({showAddForm: false});
  }

  toggleEditForm(value) {
    this.setState({showEditForm: value});
  }

  editRecipe(name, ingredients, instructions) {
    var arr = this.state.recipes;
    var index = arr.indexOf(this.state.selectedRecipe);
    var editedRecipe = {
      'name': name,
      'ingredients': ingredients,
      'instructions': instructions
    };
    arr[index] = editedRecipe;
    this.setState({recipes: arr});
    this.setState({selectedRecipe: editedRecipe});
  }

  deleteRecipe(recipe) {
    var arr = this.state.recipes;
    var index = arr.indexOf(recipe);
    arr.splice(index,1);
    this.setState({recipes: arr});
    this.setState({selectedRecipe: null});
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
            selectedRecipe={this.state.selectedRecipe}
            chooseRecipe={this.chooseRecipe}
            addClicked={this.addClicked}
          />
          <DisplayComponent
            selectedRecipe={this.state.selectedRecipe}
            showAddForm={this.state.showAddForm}
            addRecipe={this.addRecipe}
            showEditForm={this.state.showEditForm}
            toggleEditForm={this.toggleEditForm}
            editRecipe={this.editRecipe}
            deleteRecipe={this.deleteRecipe}
          />
        </div>
      </div>
    );
  }
}
