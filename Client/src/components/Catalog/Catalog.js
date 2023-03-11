import React, {useState, useEffect, useCallback} from 'react'
import './Catalog.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import AdminNavbar from '../Admin/AdminNavbar'

function Catalog(){
return (
	<div className="App">
        <AdminNavbar/>
        <h1 className='h1resources'>
        For Career Development Tools
            <h2 className='h22resources'>Resources to learn Tech and Skills <NavLink id='navlinkresources' to="/resources">Click</NavLink></h2>
        </h1>

        <div className= "cardProfile">
        <h2 className='h2career'>
            Linked In     <Button className='btncareer'  href="https://www.linkedin.com/">View</Button>
        </h2>
        <p className='pcareer'>
            A platform to explore industry trends, jobs, and expand your network.
        </p>
        
        
    </div>
    <div className= "cardProfile">
        <h2 className='h2career'>
        Resume Builder <Button className='btncareer' href="https://www.canva.com/create/resumes/">View</Button> 
        </h2>
        <p className='pcareer'>
        A resume is a brief summary of personal and professional experiences and skills.
        </p>
    </div>
    <div className= "cardProfile">
        <h2 className='h2career'>
            Glassdoor <Button className='btncareer' href="https://www.glassdoor.com/Job/index.htm">View</Button>
        </h2>
        <p className='pcareer'>
        Glassdoor is an American website where current and former employees anonymously review companies.
        </p>
    </div>
    <div className= "cardProfile">
        <h2 className='h2career'>
        Swot Analysis <Button className='btncareer' href="https://en.wikipedia.org/wiki/SWOT_analysis">View</Button>
        </h2>
        <p className='pcareer'>
        strengths, weaknesses, opportunities, and threats analysis is used to develop strategic planning of company.
        </p>
    </div>
    <div className= "cardProfile">
        <h2 className='h2career'>
        Confidence!   <Button className='btncareer' href="https://www.psychologytoday.com/us/basics/confidence">View</Button>
        </h2>
        <p className='pcareer'>
        Confidence is a state of being clear-headed: either that a hypothesis or prediction is correct.
        </p>
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
</div>            
);
};

export default Catalog;