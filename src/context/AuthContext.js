/* In this file, i have set up the authentication and updated 
authorization features, 
with the help of a react hook called context hook, the app will have access to
the user anywhere in the application to make sure the user is signed in and authenticated
in every page of our web app */


import React, { useContext, useState, useEffect } from 'react'// import all the react hooks needed
import { auth } from '../firebase'/* here i have imported the 
Authentication module from the firebase.js file */

const AuthContext = React.createContext() /* This is where i have created 
the Authentication context, this module will to provide authentication 
functionalities to the code */

export function useAuth(){ //This function allows us to use the Context
    return useContext(AuthContext)
}

export function AuthProvider({children}) { /* this function is resposible of
    creating the user, the children are the properties such as email and password*/

    //As i said, in react we use hooks alot to make things simpler
    const [currentUser, setcurrentUser] = useState() /* this is a useState Hook
    it allows me to create a value and a function that 
    updates the variabe to a new value. In this case its a User */
    const [loading, setLoading] = useState(true)// This hook handles our loading state

    function signup(email, password) {
        //with the auth module imported from firebase.js, we use it to create a user
        return auth.createUserWithEmailAndPassword(email, password)
    }
        
    function login(email, password) {
        /* this is a login function that uses the auth module from firebase.js 
        to log the user into the web-app */
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        /* The log out function logs the user out of the dashboard/homepage */
       return auth.signOut()
    }

    useEffect(() =>{//this useEffect hook is triggered once the app mounts  to the browser
    const unsubscribe= auth.onAuthStateChanged(user => { /* with firebase, 
        once a user is created, 
        it provides the properties of the user to the authentication service that
        the app has access to */
        setcurrentUser(user) //here we update the values of the new current user   
        setLoading(false)           
    })
           return unsubscribe/* once the user closes the browser the app dismounts 
           and unsubscribes the user from the app*/
    },[])
   
    const value ={/* here i have created an object 
        that holds the values of the current user, the login function, 
        the signup function and the logout function
        */
        currentUser,
        login,
        signup,
        logout
    }

    return (// now i have wrapped the values with the authentication context
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
// from here go to the Signup.js and the Login.JS fileS where we import these properties