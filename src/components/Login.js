/* This file is an aditional component in react,
 i have coded to handle user login, with the firebase authentication. */

import React, { useRef, useState } from 'react'// import react library and its modules
import { Form, Card, Button, Alert } from 'react-bootstrap'// used for styles
import { Link, useHistory } from 'react-router-dom'/* Link is used to link page addresses,
while useHistory is a react hook that will help us clear the user's 
login session once they log out in order to remove them from the dashboard after
they log out*/
import { useAuth } from '../context/AuthContext' //import the useAuth function from AuthContext.js

export default function Login() { /* This function just like the signup function
    takes all the inputed values from the user and validates
    them with the login function from AuthContext.js */
    const emailVal = useRef() //takes the inputed email
    const passwordVal = useRef()// user's password
    const { login } = useAuth()// import the login function from AuthContext.js
    const [error, setError] = useState("")// error hook
    const [loading, setLoading] = useState(false)//loading hook
    const history = useHistory()
    /* Another async function but this time it's for user login.*/
    async function handleSubmit(e) {
        e.preventDefault()// prevents the sign up form from refreshing

        try{//now the login function is called and awaits the results
            setError("")
            setLoading(true)/* sets the loading state to true to prevent the user
            from clicking the sign up button multiple times */
        await login(emailVal.current.value, passwordVal.current.value)
            history.push("/")
        } catch{
            setError("Failed to log In to account")//if an error occurs it throws an error
            setLoading(false)
        }
    }
    //this is the code for the login display and where the user puts in their credentials
    return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailVal} required/>
                </Form.Group>

                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordVal} required/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">Log In</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link> 
    </div>    
    </>
    )
}
