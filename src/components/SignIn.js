import React from 'react'
import "./signin.css"
import Logo from "./logo.png"
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='signup'>
    <div className='form-container'>
      <img className="signup-logo" src={Logo} alt='logo'/>
      <h3>Sign In</h3>
      <div>
        <input type='email' name ="email" id="email" placeholder='Enter your email'/>

      </div>
     
      <div>
        <input type='password' name ="password" id="password" placeholder='enter your password'/>
      </div>
      <div>
      
      <input type="submit" id='submit-btn' name='submit' value="Sign In"/>
      </div>
      <p>Don't have an account ? </p>
       <Link to= "/signup">Sign Up</Link>
        </div>
        </div>

  )
}
