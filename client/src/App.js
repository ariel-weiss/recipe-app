import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import RecipePage from './components/RecipePage/RecipePage';
import Navbar from './components/Navbar/Navbar';
import ViewRecipes from './components/ViewRecipes/ViewRecipes';
import MyRecipes from './components/MyRecipes/MyRecipes';
import Auth from './components/Auth/Auth';

//import useStyles from './styles';
import store from './redux/store';

function App() {
  
  //const classes = useStyles();
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
          <Route path='/' exact render={() => (<ViewRecipes setChosenRecipe={setChosenRecipe}/>)} />
          <Route path='/recipe' exact render={() => (<RecipePage recipe={chosenRecipe}/>)} />
                    <Route path='/recipes' exact component={MyRecipes} />
                    <Route path='/auth' exact component={Auth} />
                </Switch>
            </Container>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
