import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const Recipe = ({ recipe }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.image} title={recipe.label} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{ recipe.label }</Typography>
            </div>
            {/* <ol>
                {recipe.ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol> */}
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>Calories: {recipe.calories}</Typography>
                <Button variant="contained" color='secondary'>Open</Button>
            </div>
        </Card>
    )
}

export default Recipe
