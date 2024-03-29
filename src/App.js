import { Routes, Route } from 'react-router-dom';
import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
//import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    // const unsubscribe =  onAuthStateChangedListener(async (user)=> {
    //     if (user) {
    //         await createUserDocumentFromAuth(user);
    //     }
    //     console.log("-----user::: " + JSON.stringify(user))
    //     dispatch(setCurrentUser(user));
    // });

    // return unsubscribe;
    //getCurrentUser().then((user) => console.log('::::::::::::: ' + JSON.stringify(user)))
    dispatch(checkUserSession());
}, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;