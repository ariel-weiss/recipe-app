import { Button, Card, CircularProgress, Grid, Grow, InputAdornment, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../redux/Recipe/recpieActions';
import Recipe from './Recipe/Recipe';
import useStyles from './styles';

const ViewRecipes = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const initialQuery = 'banana';

  //Show some results on load:
  // useEffect(() => {
  //   //props.fetchRecipes(initialQuery);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchRecipes(search);
    //setQuery(search);
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
            {(!props.recipes || props.recipes.length < 1) ? <CircularProgress /> :
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {props.recipes.map((recipeObj) => (
                    <Grid key={recipeObj.label} item xs={8} sm={4}>
                    <Recipe key={recipeObj.recipe.label} recipe={recipeObj.recipe} setChosenRecipe={ props.setChosenRecipe }/>
                    </Grid>
                ))}
              
            </Grid>
            }
          </Grow>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      recipes: state.recipes
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchRecipes: (query) => dispatch(fetchRecipes(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRecipes);
