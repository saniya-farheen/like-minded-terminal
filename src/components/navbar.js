import React from 'react'
import Logo from './logo.png'
import { Link } from 'react-router-dom';
import './navbar.css';
export default function navbar() {
  return (
    <div className='navbar'>
    <img src={Logo} alt='logo'/>
    <ul>
         <Link to="/signup" >        
         <li>SignUp</li>
         </Link>
         <Link to="/signin" >  
        <li>Sign In</li>
        </Link>
        <Link to="/profile" >  
        <li>Profile</li>
        </Link> 
    </ul>
    </div>
  );
  
}
