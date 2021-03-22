import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import RecipePage from './components/Pages/RecipePage/RecipePage';
import MyRecipesPage from './components/Pages/MyRecipesPage/MyRecipesPage';
import GeneralRecipesPage from './components/Pages/GeneralRecipesPage/GeneralRecipesPage';
import AuthPage from './components/Pages/AuthPage/AuthPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';

import store from './redux/store';

function App() {
  
  const [chosenRecipe, setChosenRecipe] = useState({});
  useEffect(() => {
    setChosenRecipe(chosenRecipe);
  }, [chosenRecipe])
  return (
    <Provider store={store}>
    <BrowserRouter>
            <Container maxwidth='lg'>
                <Navbar />
                <Switch>
                    <Route path='/' exact render={() => (<GeneralRecipesPage setChosenRecipe={setChosenRecipe}/>)} />
                    <Route path='/recipe' exact render={() => (<RecipePage recipe={chosenRecipe}/>)} />
                    <Route path='/recipes' exact render={() => (<MyRecipesPage setChosenRecipe={setChosenRecipe}/>)} />
                    <Route path='/auth' exact component={AuthPage} />
                    <Route path='/about' exact component={AboutPage} />
                </Switch>
            </Container>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
