import React,{useEffect, useState} from 'react';
import Logo from './logo.png';
import './signup.css';
import { Link } from 'react-router-dom';
export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const postData =() =>{
    
    
      //sending data to server
      fetch("http://localhost:5000/signup", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
         name : name,
         username:username,
         email : email,
         password:password
        }),
      }).then(res=>res.json())
      .then(data =>{console.log(data)})
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error here
      });
    };


  
  return (
    <div className='signup'>
    <div className='form-container'>
      <img className="signup-logo" src={Logo} alt='logo'/>
      <h3>Sign Up</h3>
      <div>
        <input type='email' name ="email" id="email" value={email} placeholder='Enter your email' onChange={(e) =>{setEmail(e.target.value)}}/>

      </div>
      <div>
        <input type='text' name ="name" id="name" value={name} placeholder='Enter your name' onChange={(e) =>{setName(e.target.value)}} />

      </div>
      <div>
        <input type='text' name ="username" id="username"value={username} placeholder='Enter your username'onChange={(e) =>{setUserName(e.target.value)}}/>

      </div>
      <div>
        <input type='password' name ="password" id="password" value={password} placeholder='enter your password'onChange={(e) =>{setPassword(e.target.value)}}/>
      </div>
      <div>
      <p>By signing up, you agree to our terms,privacy and cookie policy</p>
      <input type="submit" id='submit-btn' name='submit' value="Sign Up" onClick={(e)=>{postData()}} />
      </div>
      <div className='form-2'>
        Already have an account?<Link to ="/signin">Sign In</Link>

      </div>

          </div>
    
    
    </div>
  )
}
