//The previous 3 files wer handling the back-end
//This is now handling the front-end

import React, { useRef, useState } from 'react'// import react library and its modules
import { Form, Card, Button, Alert } from 'react-bootstrap'// used for styles
import { useAuth } from '../context/AuthContext' //and the useAuth function from AuthContext.js
import { Link, useHistory } from 'react-router-dom'
export default function Signup() { /* this function now takes all the inputed values
    from the user and validates them with the signup function from AuthContext.js */
    const emailVal = useRef() //takes the inputed email
    const passwordVal = useRef()// user's password
    const passwordConfirmVal = useRef() //confirm password value
    const { signup } = useAuth()// we can import the signup function from AuthContext.js
    const [error, setError] = useState("")// error hook
    const [loading, setLoading] = useState(false)//loading hook
    const history = useHistory()
    /* The nexy function is an async function, async means asynchronous,
    its a function that stops the code from running until a certain procedure has 
    been completed. in this case, Its creating a user */
    async function handleSubmit(e) {
        e.preventDefault()// prevents the sign up form from refreshing

        if (passwordVal.current.value !== passwordConfirmVal.current.value){
            //this checks if the passwprds match, if not, it throws an error.
            return setError("Error! Passwords did not match")
        }
        try{//now the signup function is called and awaits the results
            setError("")
            setLoading(true)/* sets the loading state to true to prevent the user
            from clicking the sign up button multiple times
            thus creating more than 1 account */
        await signup(emailVal.current.value, passwordVal.current.value)
        history.push("/")
        } catch{
            setError("Failed to load account")//if an error occurs it throws an error
        }
    }
    //this is the code for the sign up display and where the user puts in their credentials
    //Lastly, go to the App.js file
    return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
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

                <Form.Group id="confirm-password">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmVal} required/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an existing account?<Link to="/login">Log In</Link>     
    </div>    
    </>
    )
}
