import { Button, Card, CircularProgress, Grid, Grow, InputAdornment, TextField } from '@material-ui/core';
import React, { useEffect,useState } from 'react';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';

const ViewRecipes = ({setChosenRecipe}) => {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');

    const APP_ID = '69c8cf17';
    const APP_KEY = '991ab8eb9fa41a1e9c59fac61b7edb4e';
    const request_template = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
    useEffect(()=>{
      getRecipes();
    }, [query])

    const getRecipes = async () => { 
      const response = await fetch(request_template);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }; 
  

    return (
        <div>
            
            <form className={classes.searchForm} onSubmit={handleSubmit}>
                <Card className={classes.searchDiv}>
                    <TextField className={classes.searchBar} variant="outlined" type='text' value={search} onChange={(e) => setSearch(e.target.value)}
                    size="small"
                        InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Search Food:
                        </InputAdornment>
                      ),
                    }}/>
                <Button className={classes.searchButton} variant="contained" color="primary" type='submit'>Search</Button>
                </Card>
            </form>
            <Grow in>
            {recipes.length < 1 ? <CircularProgress /> :
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {recipes.map((recipeObj) => (
                    <Grid key={recipeObj.label} item xs={12} sm={6}>
                    <Recipe key={recipeObj.recipe.label} recipe={recipeObj.recipe} setChosenRecipe={ setChosenRecipe }/>
                    </Grid>
                ))}
              
            </Grid>
            }
          </Grow>
        </div>
    )
}

export default ViewRecipes;
