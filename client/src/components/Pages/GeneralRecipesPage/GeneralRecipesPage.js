import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SearchRecipe from '../../SearchRecipe/SearchRecipe';
import ViewRecipes from '../../ViewRecipes/ViewRecipes';

import { fetchGeneralRecipes } from '../../../redux/Recipe/recpieActions';

const GeneralRecipesPage = (props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query && query !== ''){
            props.fetchRecipes(query);
        }
    }, [query])

    return (
        <div>
            <SearchRecipe setQuery={setQuery}/>
            <ViewRecipes general setChosenRecipe={props.setChosenRecipe}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: (query) => dispatch(fetchGeneralRecipes(query))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(GeneralRecipesPage);
