import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ViewRecipe from './components/ViewRecipe/ViewRecipe';
import Auth from './components/Auth/Auth';

import useStyles from './styles';

function App() {
  
  const classes = useStyles();
  
  return (
    <BrowserRouter>
            <Container maxwidth='lg'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/recipe' exact component={ViewRecipe} />
                    <Route path='/auth' exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
  );
}

export default App;
