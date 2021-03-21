import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Breadcrumbs } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './styles';

import { googleAuth, logOut } from '../../redux/Auth/authActions';


const Navbar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        const token = user?.token;
        if (token) {
          //const decodedToken = decode(token);
          //if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          //console.log(token);
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    const logout = () => {
        //dispatch({ type: actionType.LOGOUT });
        props.logOut()
        history.push('/auth');
        setUser(null);
    };
    
    return (
        <AppBar className={classes.navBar} position='sticky' color='inherit'>
            {/* <image className={classes.logo} src='../../images/food_logo.png' /> */}
            <Breadcrumbs>
                <Typography className={classes.heading} component={Link} to='/'  variant='h6' >Home</Typography>
                <Typography className={classes.heading} component={Link} to='/recipes'  variant='h6' >My Recipes</Typography>
                <Typography className={classes.heading} component={Link} to='/about'  variant='h6' >About</Typography>
            </Breadcrumbs>

            {/* <div class={classes.vline}></div> */}
    
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar);
  
