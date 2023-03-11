import React from 'react'
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';

export default function About() {
  return (
    <>

      <Navbar/>
      <div className='section'>
            <div className='first-about'>
            <section class="module bg-dark-30 about-page-header">
          <div class="second">
          <h2 id='h2about'>About Our Team</h2>
          <p id='paraabout'>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."

Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer. </p>
          
           
          </div>
        </section>
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
