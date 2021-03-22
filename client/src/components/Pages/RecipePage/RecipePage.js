import React from 'react'
import { connect } from 'react-redux';
import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles.js';
import { addUserRecipe } from '../../../redux/User/userActions.js';

const RecipePage = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const handleAddRecipe = (e) => {
        //dispatch AddRecipe action
        props.addRecipe(props.recipe,history);
        
    };
    return props.recipe ? (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.recipe.image}  />
            <div className={classes.overlay}>
                <Typography variant='h4'>{props.recipe.label}</Typography>
                <Typography variant='body2'>Calories: { Number(props.recipe.calories).toFixed(2) }</Typography>
            </div>
            
             <div className={classes.overlay2}>
                <Button className={classes.openButton} variant="contained" color='secondary' size='small' onClick={handleAddRecipe}>Add to my recipes</Button>
            </div>
            
            <ol >
                {props.recipe.ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
        </Card>
        
        
    ) :
        <Card><Typography variant='h6'>Choose Recipe</Typography></Card>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (data,history) => dispatch(addUserRecipe(data,history))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(RecipePage);
