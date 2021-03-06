import { Grow } from '@material-ui/core';
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { googleSignIn, signIn, signUp } from '../../../redux/Auth/authActions';

import SignIn from './SignIn';
import SignUp from './SignUp';



const initForm = {
    name: '',
    email: '',
    password: ''
};
  
const AuthPage = (props) => {
    const [isRegistered, setIsRegistered] = useState(true);
    const [formData, setFormData] = useState(initForm);
    const history = useHistory();
    
    const handleGoogleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            props.googleSignIn({ result, token }, history);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleError = () => {
        console.error('Google Sign In has error :( ');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formData);
        if (isRegistered) {
            props.signIn(formData, history);
        } else {
            props.signUp(formData, history);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Grow in>
                {isRegistered ?
                    <SignIn setIsRegistered={setIsRegistered} handleSubmit={handleSubmit} handleChange={handleChange} handleGoogleSuccess={handleGoogleSuccess} handleGoogleError={handleGoogleError}/>
                    :
                    <SignUp setIsRegistered={setIsRegistered} handleSubmit={handleSubmit} handleChange={handleChange} />}
            </Grow>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        googleSignIn: (data,router) => dispatch(googleSignIn(data,router)),
        signIn: (data,router) => dispatch(signIn(data,router)),
        signUp: (data,router) => dispatch(signUp(data,router)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthPage);
