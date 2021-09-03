//This is a user SignUp authentication demo,
/*In ReactJS functionalities are coded in components and rendered in the index.js 
file, through the main component which is located in the App.js file.
*/
import React from 'react'; //Here we import the ReactJS library

import ReactDOM from 'react-dom';/*ReactDom is where all the components are rendered and displayed
to the user's browser*/

import App from './components/App';/*Here we import the main App component that contains
all the other components of the App */

import 'bootstrap/dist/css/bootstrap.min.css'/*Bootstrap is a library used for
 styles to make the components more presentable*/

ReactDOM.render(//This object renders the components. Strictmode helps check for errors
  <React.StrictMode>
    <App />      
  </React.StrictMode>,
  document.getElementById('root')
);

/* The App component that was earlier imported is now rendered in line 18.
 From here go to the firebase.js file for further explanations */