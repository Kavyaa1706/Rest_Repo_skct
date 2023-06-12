import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from './api/axios';
import { useNavigate } from "react-router-dom";
import img from "./airplane1.jpg";
import "./Login.css";




const Login = () => {
    

   const[username,setusername]=useState("");
  const[password,setPassword]=useState("");
   const[error,setError]=useState("");
    const navigate=useNavigate();

  const handleUsernameChange=(e)=>{
   setusername(e.target.value);
   }
   const handlePasswordChange=(e)=>{
     e.preventDefault();
    axios.get(`http://localhost8080/Login/${username}/${password}`
   ).then((response)=>{
       let err=response.data;
      console.log(response.data);
       if(err.length!=="Login Successful"){
          setError("");
      }
      else{
          <h2>Incorrect Password or Email</h2>
       }
       
   })
 }

   

    return (
        <div>
            <div>
                <img className="plane" src={img}></img>
            </div>
      <div>
        <div className="ppl1"></div>
         <div className="entire1">
          <div className="form">
            <h2 className="sign1">Login</h2>
            <form onSubmit={Login }>
              <input className="usern" type="text"
               name='username'
               placeholder="Username"
               onChange={(e)=>setusername(e.target.value)}
               />

              <input className="pass"
              type="password" 
              name='password' 
              placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              />
                {/* <button className="up1 " onClick={alert("Logged")}>Login             
                            </button> */}
                <Link to='/pages/home'>
                  <button className="up1" >Login
                              </button>
                </Link>
  
            </form>
            <p className="message">Do not have an Account?<Link to='/Register'> <i><b><a>SignUp</a></b></i></Link></p>
            
          </div>
      </div>
    </div>
   <div>
    <h2 className="ready1">
        <i>Ready to Takeoff..?</i>
    </h2>
   </div>
    
    </div>
    )
}

export default Login
