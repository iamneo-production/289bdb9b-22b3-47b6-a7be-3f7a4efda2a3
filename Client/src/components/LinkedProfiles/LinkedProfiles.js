import React,{useState} from 'react'

import './Linked.css'

import Ldata from './Ldata';
import AdminNavbar from '../Admin/AdminNavbar';
import { NavLink } from 'react-router-dom';
export const LinkedProfiles = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
   
   
  return (
    <>
    <AdminNavbar/>
    <div className='section'>
      
            <div className='first-profile'>
            <section  class="module bg-dark-30 about-page-header">
          <div class="second">
          <h2  className='h2tag'>Connect to the LinkedIN Women Tech Heros!</h2>
          <p className='para'>Women can bring a fresh approach and offer unique perspectives to meet challenges, solve problems, and design new products. </p>
          
            <div class="row" id="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h1 class="module-title font-alt mb-0">
               
                </h1>
              </div>
            </div>
          </div>
        </section>
            </div>
        </div>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className = "row" >
        {
            
            Ldata 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.sname.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
               
              })
              .map((val) => {
                return(
                    <div  id="post_prof" className = "col-md-3" key={val.sname}>
                         <div className="card" style={{"width": "17.5rem"}} >
                            <img id='iamgess' src={val.img} className="card-img-top" alt={val.name} />
                            <div className="card-body">
                                <h5 id='h5title' className="card-title">{val.title}</h5>
                                <a id="atag" className="textt" href={val.links}>Connect Now</a>
                                </div>
                            </div>
                      </div> 
                )
              })
        
            
            }
        </div>
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
