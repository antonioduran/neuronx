//import { createContext, useState, useEffect, useReducer } from "react";
//import { createContext, useEffect, useReducer } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//import { createAction } from '../utils/reducer/reducer.utils';

// export const UserContext = createContext({
//     setCurrentUser: () => null,
//     currentUser: null
// });

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: "SET_CURRENT_USER"
// };

// const INITIAL_STATE = {
//     currentUser: null,
// }

// const userReducer = (state, action) => {
//     console.log('dispatched');
//     console.log(action);
//     const {type, payload} = action;
   
//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//               ...state,
//                 currentUser: payload
//             };
//         default:
//         throw new Error(`Unhandled type ${type} in userReducer`)
//     }
// };

//export const UserProvider = ({children}) => {
    // const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    // console.log(currentUser)

    // const setCurrentUser = (user) =>
    //     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

    //const [currentUser, setCurrentUser] = useState(null)
    //const value = {currentUser, setCurrentUser };

    // useEffect(()=> {
    //     const unsubscribe =  onAuthStateChangedListener(async (user)=> {
    //         if (user) {
    //             await createUserDocumentFromAuth(user);
    //         }
    //         console.log("-----user::: " + JSON.stringify(user))
    //         setCurrentUser(user)
    //     });

    //     return unsubscribe;
    // }, [])

    // const value = {
    //     currentUser,
    // };

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }