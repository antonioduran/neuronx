import React from "react";  
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES }  from '../button/button.component';
//import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';

import {
    googleSignInStart,
    emailSignInStart,
  } from '../../store/user/user.action';

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = ()=> {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
        //await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            //const user = 
            //await signInAuthUserWithEmailAndPassword(email, password)
            dispatch(emailSignInStart(email, password));
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                     break;
                default:
                    console.log(error);
            }

            console.log('user sign in failed', error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;