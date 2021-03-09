import React from 'react'
import { Button, Card, CardMedia, Typography } from '@material-ui/core';

const RecipePage = ({ recipe }) => {
    console.log(recipe);
    return recipe ? (
        <Card >
            <CardMedia  image={recipe.image} title={recipe.label} />
            <div>
                <Typography variant='h6'>{ recipe.label }</Typography>
            </div>
            <ol>
                {recipe.ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <div >
                <Typography variant='body2' color='textSecondary'>Calories: {recipe.calories}</Typography>
                <Button variant="contained" color='secondary'>Open</Button>
            </div>
        </Card>
        
        
    ) : "Choose Recipe"
}

export default RecipePage
