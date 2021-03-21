import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ViewRecipes from '../../ViewRecipes/ViewRecipes';

const MyRecipesPage = () => {
    //const classes = useStyles();
    //const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        const token = user?.token;
        if (token) {
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div>
            {user ? 
                <ViewRecipes />
                :
                <h2 style={{ color: 'white' }}>You must be logged in!</h2>}
        </div>
    )
}

export default MyRecipesPage
