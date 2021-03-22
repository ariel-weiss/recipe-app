import React from 'react'
import { connect } from 'react-redux';
import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles.js';
import { addUserRecipe, removeUserRecipe } from '../../../redux/User/userActions.js';

const RecipePage = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const handleAddRecipe = (e) => {
        props.addRecipe(props.recipe,history);
        
    };
    const handleRemoveRecipe = (e) => {
        if(props.recipe.id){
            props.removeRecipe(props.recipe.id, history);
        }
    };

    return props.recipe ? (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.recipe.image}  />
            <div className={classes.overlay}>
                <Typography variant='h4'>{props.recipe.label}</Typography>
                <Typography variant='body2'>Calories: { Number(props.recipe.calories).toFixed(2) }</Typography>
            </div>
            
            <div className={classes.overlay2}>
                {props.recipe.id ? 
                <Button className={classes.openButton} variant="contained" color='primary' size='small' onClick={handleRemoveRecipe}>Remove Recipe</Button>
                :
                <Button className={classes.openButton} variant="contained" color='secondary' size='small' onClick={handleAddRecipe}>Add to my recipes</Button>    
                }
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
        addRecipe: (data,history) => dispatch(addUserRecipe(data,history)),
        removeRecipe: (uid,history) => dispatch(removeUserRecipe(uid,history))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(RecipePage);
