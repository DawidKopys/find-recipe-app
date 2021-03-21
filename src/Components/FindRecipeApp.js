import React, { Suspense } from 'react';
import './FindRecipeApp.css';
import Navbar from 'Components/Navbar/Navbar';
import RenderLoader from 'Components/RenderLoader/RenderLoader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const FindRecipe = React.lazy(() => import('Components/FindRecipe/FindRecipe'));
const AddRecipe = React.lazy(() => import('Components/AddRecipe/AddRecipe'));

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Router>
        <Navbar />
        <Suspense fallback={RenderLoader()}>
          <Switch>
            <Route exact path='/' component={FindRecipe} />
            <Route path='/add-recipe' component={AddRecipe} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default FindRecipeApp;
