//import { useEffect } from 'react';
//import {getRedirectResult} from 'firebase/auth'

// import {
//    // auth,
//     signInWithGooglePopup,
//     //signInWithGoogleRedirect,
//     createUserDocumentFromAuth,
//   } from '../../utils/firebase/firebase.utils';

import React from "react";  
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () => {
  //Leaving this comment - sign in with redirect
  // useEffect(()=> async() => {
  //   const response = await getRedirectResult(auth)
  //   console.log(response)

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  

  // const logGoogleRedirectUser= async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     console.log("user---> " + JSON.stringify(user));
  
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //     console.log("userDocRef---> " + JSON.stringify(userDocRef));
  //   };
  
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
  
export default Authentication;