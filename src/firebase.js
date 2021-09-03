
/*With Firebase, Developers can Deploy, Host web apps and get user authentication services
for web applications */
import firebase from "firebase/app"/* I already downloaded the firebase library and
here is where i import the library*/
import "firebase/auth"//We also need the auth module for authentication

/* Below are credentials that are needed to connect to my firebase account 
where i set up this application for user authentication, if i had a cloud 
database, i would just add the Database connection URL here */
/* It is important to NOTE, for security purposes, when deploying the application,
Such credentials must be hidden. this is why you see "apiKey: process.env.REACT_APP_FIREBASE_API_KEY
" the real credentials are hidden in a .env.local file */
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()//Here i have exported a variable function for authentication
export default app /* And also export the app variable in-order to
 use the app module everywhere else in the project file */

 //from here go to the AuthContect.js file