import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Breadcrumbs } from '@material-ui/core';
import { GoogleLogin }from 'react-google-login';

import useStyles from './styles';
import LoginIcon from './loginIcon';


const Navbar = () => {
    const classes = useStyles();
    const isSignup = false;

    const handleGoogleSuccess = async (res) => { 
        //console.log(res);
        // const result = res?.profileObj;
        // const token = res?.tokenId;
        // try {
        //     dispatch({ type: 'AUTH', data: { result, token } });
        // } catch (error) {
        //     console.error(error);
        // }
    };
    const handleGoogleError = () => {
        console.error('Google Sign In has error :( ');
     };

    return (
        <AppBar className={classes.navBar} position='sticky' color='inherit'>
            <Breadcrumbs>
                <Typography className={classes.heading} component={Link} to='/'  variant='h6' >Home</Typography>
                <Typography className={classes.heading} component={Link} to='/recipes'  variant='h6' >My Recipes</Typography>
                <Typography className={classes.heading} component={Link} to='/'  variant='h6' >About</Typography>
            </Breadcrumbs>
            <Toolbar className={classes.toolbar}>
            {!isSignup && <GoogleLogin
                    clientId="899926147664-st9gcasq097h481khp17et9s411g1npk.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={'classes.googleButton'} component={Link} to='/auth' variant='contained' fullWidth color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<LoginIcon />} >
                            Sign in
                        </Button>
                    )}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleError}
                cookiePolicy="single_host_origin"
                />
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
