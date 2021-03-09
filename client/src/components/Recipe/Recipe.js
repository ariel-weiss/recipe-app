import React from 'react'

const Recipe = ({recipe}) => {
    return (
        <div>
            <h1>{recipe.label}</h1>
            <ol>
                {recipe.ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <p>Calories: { recipe.calories }</p>
            <img src={recipe.image} alt='' />
        </div>
    )
}

export default Recipe
