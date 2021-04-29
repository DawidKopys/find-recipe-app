import React, { Component } from 'react';
import './RecipeDetails.css';

export default class RecipeDetails extends Component {
  render() {
    const recipeName = decodeURI(this.props.match.params.recipeName);

    return (
      <h2 className='recipe-details recipe-finder-app__recipe-details'>
        {recipeName} recipe details.
      </h2>
    );
  }
}
