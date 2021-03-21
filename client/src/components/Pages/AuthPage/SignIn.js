import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { GoogleLogin }from 'react-google-login';
import LoginIcon from './loginIcon';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
   
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submit2: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export default function SignIn({setIsRegistered,handleGoogleSuccess, handleGoogleError,handleSubmit,handleChange}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
         <GoogleLogin
                    clientId="899926147664-st9gcasq097h481khp17et9s411g1npk.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={classes.submit} component={Link} to='/auth' variant='contained' fullWidth color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<LoginIcon />} >
                            Sign in using google
                        </Button>
                    )}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleError}
                cookiePolicy="single_host_origin"
         />
        
        OR
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
            <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit2}
            onClick={() => setIsRegistered(registered => !registered)}
          >
            Register
          </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

