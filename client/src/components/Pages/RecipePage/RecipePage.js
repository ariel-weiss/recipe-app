import React from 'react'
import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles.js';

const RecipePage = ({ recipe, notAdded }) => {
    const classes = useStyles();
    const handleAddRecipe = () => { };
    return recipe ? (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.image}  />
            <div className={classes.overlay}>
                <Typography variant='h4'>{recipe.label}</Typography>
                <Typography variant='body2'>Calories: { Number(recipe.calories).toFixed(2) }</Typography>
            </div>
            
            {notAdded && <div className={classes.overlay2}>
                <Button variant="contained" color='secondary' size='small' onClick={handleAddRecipe}><Link to='/recipes' className={classes.openButton}>Add to my recipes</Link></Button>
            </div>}
            
            <ol >
                {recipe.ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
        </Card>
        
        
    ) :
        <Card><Typography variant='h6'>Choose Recipe</Typography></Card>
}

export default RecipePage
