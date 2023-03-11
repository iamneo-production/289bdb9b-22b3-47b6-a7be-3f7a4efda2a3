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
          <h2 id='h2about'>About Our TechSheRo</h2>
          <p id='paraabout'>TechSheRo is an online platform that showcases the work and achievements of female technology professionals with the goal of inspiring other women to consider a career in technology. It features profiles of successful female tech leaders, as well as articles and resources about various aspects of the tech industry. The platform is designed to encourage and support women who are interested in pursuing a career in technology and to help them understand the impact they can have in this field. By providing a community of like-minded individuals, TechSheRo aims to break down barriers and empower women in technology.</p>   
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
