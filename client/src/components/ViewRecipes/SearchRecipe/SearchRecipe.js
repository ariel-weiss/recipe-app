import React, { useState } from 'react';
import { Button, Card, InputAdornment, TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { fetchGeneralRecipes } from '../../redux/Recipe/recipeActions';
import useStyles from '../ViewRecipes/styles';

const SearchRecipe = () => {
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
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.recipe.loading,
        recipes: state.recipe.recipes,
        errorMsg: state.recipe.errorMsg
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: (query) => dispatch(fetchGeneralRecipes(query))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchRecipe);
