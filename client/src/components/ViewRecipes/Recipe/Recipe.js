import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

import useStyles from './styles';

const Recipe = ({ recipe, setChosenRecipe }) => {
    const classes = useStyles();
    const handleOpenRecipe = () => {
        setChosenRecipe(recipe);
      }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.image} title={recipe.label} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{ recipe.label }</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>Calories: {recipe.calories}</Typography>
                <Button variant="contained" color='secondary' onClick={handleOpenRecipe}><Link to='/recipe'>Open</Link></Button>
            </div>
        </Card>
    )
}

export default Recipe
