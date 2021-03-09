import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Breadcrumbs } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.navBar} position='sticky' color='inherit'>
            <Breadcrumbs>
                <Typography className={classes.heading} component={Link} to='/'  variant='h6' >Home</Typography>
                <Typography className={classes.heading} component={Link} to='/auth'  variant='h6' >My Recipes</Typography>
                <Typography className={classes.heading} component={Link} to='/'  variant='h6' >About</Typography>
            </Breadcrumbs>
                <Toolbar className={classes.toolbar}>
                    <Button component={Link} to='/auth' variant='contained'>Login</Button>
                </Toolbar>
        </AppBar>
    )
}

export default Navbar
