import React from 'react'
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import "../../components/NewHome.css";
import './AdminNavbar.css'
export const AdminHome = () => {
  return (
    <>
    <AdminNavbar />
    <div className='section'>
      
            <div className='first-admin'>
            <section  class="module bg-dark-30 about-page-header">
          <div class="second">
          <h2  className='h2tag'>Welcome Admin!</h2>
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
