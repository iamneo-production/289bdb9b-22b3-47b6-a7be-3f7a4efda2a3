import React, { useContext ,useState} from 'react'
import './navbar.css';

import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  
  const {state}=useContext(UserContext);
  const RenderMenu =()=>{
    if(state){
      return (
        <>
        <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Profiles</NavLink>
            </li>
          
            <li>
              <NavLink to="/posts">Articles</NavLink>
            </li>
            
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/forum">Forum</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
        </>
      )
    }else{
      return(
        <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">
                 About
              </NavLink>
            </li>
            <li>
              <NavLink to="/profiles">Profiles</NavLink>
            </li>
            
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>

        </>
      )
    }
  }
  
  
  return (
    
    <>
    <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>T</span>ech
            <span>S</span>he
            <span>R</span>o
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <RenderMenu/>
          </ul>
        </div>

        
        
      </nav>
    
  
   
    </>
  )
}

export default Navbar;
