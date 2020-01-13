import React from 'react';
import $ from 'jquery';
import List from './List.jsx';
import Ingredients from './Ingredients.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/recipes',
      success: (data) => {
        this.setState({
          recipes: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  searchRecipes(ingredients) {
    let obj = { "in": ingredients};
    console.log('from app', ingredients);
    $.ajax({
      url: '/search/recipes',
      method: 'POST',
      data: obj,
      success: (res) => {
        let data = JSON.parse(res);
        this.setState({
          recipes: data.results
        })
        // console.log('success', JSON.parse(res));
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Eat at Home</h1>
      <List items={this.state.recipes}/>
      <Ingredients searchFunc = {this.searchRecipes} />
    </div>)
  }
}

export default App;