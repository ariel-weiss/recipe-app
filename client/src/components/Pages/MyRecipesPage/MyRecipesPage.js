import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import ViewRecipes from '../../ViewRecipes/ViewRecipes';
import { fetchUserRecipes } from '../../../redux/User/userActions';

const MyRecipesPage = (props) => {
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        const token = user?.token;
        if (token) {
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    useEffect(() => {
        if(user){
            props.fetchRecipes();
        }
    }, []);

    return (
        <div>
            {user ? 
                <ViewRecipes setChosenRecipe={ props.setChosenRecipe }/>
                :
                <h2 style={{ color: 'white' }}>You must be logged in!</h2>}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchUserRecipes())
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(MyRecipesPage);
