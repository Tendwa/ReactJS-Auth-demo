//This is where all the app components are collected and rendered to the index.js file
//In this case its just the Signup.js component

import React from "react" //importing the react library
import { Container } from "react-bootstrap";/* With bootstrap we can import components
like Containers for display */
import { AuthProvider } from "../context/AuthContext" //importing the Context file
import Signup from './Signup' //import the Signup component
import Homepage from "./Homepage";
import Login from "./Login";
import "../App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";


function App() {
  return(
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/profile" component={Profile}/>
        </Switch>
      </AuthProvider>
      </Router>
        </div>
    </Container>
  ) 
}

export default App;
