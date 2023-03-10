import React , {useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import "./signup.css";
import Navbar from './Navbar';
const Signup=()=>{
    const history=useNavigate();
    const[userType,setUserType]=useState("");
    const[secretKey,setSecretKey]=useState("");
    const[user, setUser]=useState({
        name:"", email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        
            console.log(e);
            name = e.target.name;  
            value=e.target.value;
            setUser({...user,[name]:value});
       
        
    }

    const PostData=async (e)=>{
        if(userType==="Admin" && secretKey!=="AdminVirtusa"){
            e.preventDefault();
            alert("Invalid Admin Details")
        }else{
            e.preventDefault();
            const {name,email,phone,work,password,cpassword,userType}= user;
    
           const res= await  fetch("/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,work,phone,password,cpassword,userType
                })
           });
           const data=await res.json();
           if(res.status===422 || !data){
            window.alert("Invalid registration");
            console.log("Invalid registration");
           }else{
             window.alert("Registration Successfull");
             console.log("Successfull registration");
             history("/login");
           } 
        }
        
    }
     
    return(
        <>
        <Navbar/>
        <form method="POST">
        <div className='wrapper'>
            <h1 id="wrapperr">Register</h1>
            <p id="regispara">Please fill in this form to create an account.</p>
            
            <div className="typesofuser">
                Register as: 
                <input 
                    type="radio"
                    name='UserType'
                    value="User"
                    onChange={(e)=>setUserType(e.target.value)}
                />
                User 

                <input
                    type="radio"
                    name='UserType'
                    value="Admin"
                    onChange={(e)=>setUserType(e.target.value)}

                />
                Admin
            </div>
            
            {userType==="Admin" ? <div class="input-box">
                <input type="text" name='skey' placeholder="Enter your Secret Key" required
                value={user.skey}
                onChange={(e)=>setSecretKey(e.target.value)}/>
            </div>:null}
            
            <div class="input-box">
                <input type="text" name='name' placeholder="Enter your name" required
                value={user.name}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="text" name='email' placeholder="Enter your name" required
                value={user.email}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="text" name='work' placeholder="Enter your work" required
                value={user.work}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="tel" name='phone' id="tel" placeholder="Enter your phone" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.phone}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="password" name='password'id='password' placeholder="Enter your password" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.password}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="password" name='cpassword' placeholder="Enter your Confirm password" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.cpassword}
                onChange={handleInputs}/>
            </div>
            
            <div class="policy">
        <input type="checkbox"/>
        <h3 id="accept">I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" onClick={PostData} value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <Link to="/login">Login now</Link></h3>
      </div>
    
            
           
            
        </div>
        </form>
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
export default Signup;