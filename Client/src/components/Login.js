import React,{useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
//import './signup.css';
import './login.css';
import { UserContext } from "../App";
const Login=()=>{
    const { dispatch}=useContext(UserContext);
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const loginUser=async (e)=>{
      
        e.preventDefault();
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Credentials")
        }else{
          if(email==="admin@gmail.com"){
            dispatch({type:"USER",payload:true})       
            window.alert("Admin Login successfull");
            history("/admin/");
          }else{
            dispatch({type:"USER",payload:true})       
            window.alert("User Login successfull");
            history("/");
          }
            
        }
    }
    return(
        <>
        <Navbar/>
    <div class="wrapper">
      <div class="title">Login</div>
      <form action="#">
        <div class="field">
          <input type="text" name="email" required  value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="password" name="password" required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
          <label>Password</label>
        </div>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div class="pass-link"><a href="/login">Forgot password?</a></div>
        </div>
        <div class="field">
          <input type="submit" onClick={loginUser} value="Login"/>
        </div>
        <div id="loginpage" class="signup-link">Not a member? <Link to="/signup" >Signup now</Link></div>
      </form>
    </div>

    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="/about">About</a></li>
      <li class="menu__item"><a class="menu__link" href="/articles">Profiles</a></li>
     

    </ul>
    <p>&copy;2023 | All Rights Reserved</p>
  </footer>
        
        </>
    )
}
export default Login;