import React, { useEffect,useState } from 'react';
import Recipe from '../Recipe/Recipe';


const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const APP_ID = '69c8cf17';
    const APP_KEY = '991ab8eb9fa41a1e9c59fac61b7edb4e';
    const request_template = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
    useEffect(()=>{
      getRecipes();
    }, [query])

    const getRecipes = async () => { 
      const response = await fetch(request_template);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }; 

    return (
        <div>
            <form className='search-form' onSubmit={handleSubmit}>
                <input className='search-bar' type='text' value={search} onChange={(e) => setSearch(e.target.value) }/>
                <button className='search-button' type='submit'>Search</button>
            </form>
            {recipes.map(recipeObj => (
                <Recipe key={ recipeObj.recipe.label } recipe={ recipeObj.recipe }/>
            ))}
        </div>
    )
}

export default Home
