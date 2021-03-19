import React from 'react';
import './FindRecipeApp.css';
import Navbar from 'Components/Navbar/Navbar';
import FindRecipe from 'Components/FindRecipe/FindRecipe';
import AddRecipe from 'Components/AddRecipe/AddRecipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <FindRecipe />
          </Route>
          <Route path='/add-recipe'>
            <AddRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default FindRecipeApp;
