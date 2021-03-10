import { Button, Card, CircularProgress, Grid, Grow, InputAdornment, TextField } from '@material-ui/core';
import React, { useEffect,useState } from 'react';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';

const ViewRecipes = ({setChosenRecipe}) => {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');
  const request_template = `http://localhost:5000/recipes/${query}`;
  
    useEffect(()=>{
      getRecipes();
    }, [query])

    const getRecipes = async () => { 
      const response = await fetch(request_template);
      const data = await response.json();
      setRecipes(data);
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
            {(!recipes || recipes.length < 1) ? <CircularProgress /> :
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {recipes.map((recipeObj) => (
                    <Grid key={recipeObj.label} item xs={8} sm={4}>
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
