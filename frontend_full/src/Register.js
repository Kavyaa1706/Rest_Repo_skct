import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Register.css";
import img from "./airplane1.jpg"
function SignUp()
{
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const navigate=useNavigate();
const Signup = () => {
  axios.post("http://localhost:8080/signup",{
    username:username,
    email:email,
    password:password
})
.then((res)=>{
  console.log(res);
}).catch((error) => {
    console.error(error);
  });;
navigate("/pages/Home");
}

const gotoLogin=()=>{
  navigate("/Login");
}
const gotoHomePage=()=>{
  navigate("/")
}
    
  return (
    <div>
      <div>
        <img className='plane' src={img}></img>
      </div>
      <div>
        <div className='ppl'> </div>
         <div className='entire'>
          <div className="form">
            <h2 className='sign'>Register</h2>
            <form onSubmit={SignUp  }>
              <input className='usern' type="text"
               name='username'
               placeholder="Username"
               onChange={(e)=>setUsername(e.target.value)}
               />

              <input className='emai' type="email" 
              name='email' 
              placeholder="Email" 
              onChange={(e)=>setEmail(e.target.value)}/>
              <input className='pass' 
              type="password" 
              name='password' 
              placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}/>
              
              <div><button className='up' onClick={()=>{Signup()}}>Sign Up</button></div>
            </form>
            <p className="message">Already have an Account?<Link to='/Login'> <i><b><a>Login</a></b></i></Link></p>
          </div>
          <div>
            <h2 className='ready'><i>Ready to Takeoff..?</i></h2>
          </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp