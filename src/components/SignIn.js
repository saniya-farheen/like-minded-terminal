import React,{useState}from 'react'
import "./signin.css"
import Logo from "./logo.png"
import { Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const[password,setPassword] = useState('');

  const notifyA = (msg)=> toast.error(msg)
      const notifyB = (msg)=> toast.success(msg)

      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
  const postData =() =>{
    //checking email
    if(!emailRegex.test(email)){
      notifyA("Invalid email")
      return;
    }
  
  
    //sending data to server
    fetch("http://localhost:5000/signin", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
       email : email,
       password:password
      }),
    }).then(res=>res.json())
    .then(data => {
      if(data.error){
      notifyA(data.error)
      }
      else{
        notifyB(data.messege)
        navigate("/")
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      notifyA("An error occurred while processing your request");
      // Handle the error here
    });
  };


  return (
    <div className='signup'>
    <div className='form-container'>
      <img className="signup-logo" src={Logo} alt='logo'/>
      <h3>Sign In</h3>
      <div>
        <input type='email' name ="email" id="email" value={email} placeholder='Enter your email' onChange={(e) =>{setEmail(e.target.value)}}/>

      </div>
      <div>
        <input type='password' name ="password" id="password" value={password} placeholder='enter your password'onChange={(e) =>{setPassword(e.target.value)}}/>
      </div>
      <div>
      
      <input type="submit" id='submit-btn' onClick={()=>{postData()}} name='submit' value="Sign In"/>
      </div>
      <p>Don't have an account ? </p>
       <Link to= "/signup">Sign Up</Link>
        </div>
        </div>

  )
}
