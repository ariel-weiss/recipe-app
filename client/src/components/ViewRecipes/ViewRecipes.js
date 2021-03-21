import React from 'react';
import {  CircularProgress, Grid, Grow } from '@material-ui/core';
import { connect } from 'react-redux';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';

const ViewRecipes = (props) => {
  const classes = useStyles();
  const emptyCollectionHeading = () => {
    if (props.general){
      return (
        <h2 style={{ color: 'white' }}>Try to search for ingredients you like 😁🍏🍌</h2>
      );
    };
    return (
      <h2 style={{ color: 'white' }}>Oops... You haven't add any recipes yet!</h2>
      );
  };
  
    return (
        <Grow in>
        {props.errorMsg ? <h2>Some error occurred : {props.errorMsg.message}</h2> :
          (props.loading ? <CircularProgress /> :
            !props.recipes ? emptyCollectionHeading() :
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {props.recipes.map((recipeObj) => (
                  <Grid key={recipeObj.label} item xs={8} sm={4}>
                    <Recipe key={recipeObj.recipe.label} recipe={recipeObj.recipe} setChosenRecipe={props.general? props.setChosenRecipe: null} notAdded={props.general}/>
                  </Grid>
                ))}
                </Grid>)
        }
        </Grow>
    )
}

const mapStateToProps = (state) => {
  return {
      loading: state.recipe.loading,
      recipes: state.recipe.recipes,
      errorMsg: state.recipe.errorMsg
  };
};

export default connect(
  mapStateToProps
)(ViewRecipes);
