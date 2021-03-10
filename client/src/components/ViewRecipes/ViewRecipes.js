import { Button, Card, CircularProgress, Grid, Grow, InputAdornment, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../redux/Recipe/recpieActions';
import Recipe from './Recipe/Recipe';
import useStyles from './styles';

const ViewRecipes = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchRecipes(search);
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
        {props.errorMsg ? <h2>Some error occurred : { props.errorMsg.message }</h2> :
            (!props.recipes || props.loading) ? <CircularProgress /> :
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {props.recipes.map((recipeObj) => (
                  <Grid key={recipeObj.label} item xs={8} sm={4}>
                    <Recipe key={recipeObj.recipe.label} recipe={recipeObj.recipe} setChosenRecipe={props.setChosenRecipe} />
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
      loading: state.loading,
      recipes: state.recipes,
      errorMsg: state.errorMsg
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
