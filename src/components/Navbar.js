import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
const [error, setError] = useState("")
const { logout } = useAuth()    
const history = useHistory()

   async function handleLogout() {
        setError('')

        try{
        await logout()
        history.push('/login')
        }catch{
            setError('Failed to Log Out!')
        }
    }
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 fixed-top">
  <Link className="navbar-brand" to="/"><h2>Drip-Drip</h2></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/"><h5>Home</h5></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile"><h5>Profile</h5></Link>
      </li>
      <li className="nav-item">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </li>
    </ul>
  </div>
</nav>
 <div className="w-100 text-center mt-2">
    {error && <Alert variant="danger">{error}</Alert>}
</div>
</> 
    )
}