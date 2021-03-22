import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

import useStyles from './styles';

const Recipe = ({ id, recipe, setChosenRecipe }) => {
    const classes = useStyles();
    const handleOpenRecipe = () => {
        if (setChosenRecipe) {
            setChosenRecipe({...recipe, id});
        }
      }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.image} title={recipe.label} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{ recipe.label }</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>Calories: {Number(recipe.calories).toFixed(2)}</Typography>
                <Button variant="contained" color='secondary' size='small' onClick={handleOpenRecipe}><Link to='/recipe' className={classes.openButton}>Open</Link></Button>
            </div>
        </Card>
    )
}

export default Recipe
