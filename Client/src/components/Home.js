import React from 'react'
import './NewHome.css';
import { ArrowRightIcon } from '@chakra-ui/icons'
import Navbar from './Navbar';

const Home = () => {
  
  return (
    <>
    <Navbar/>
    <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
          <div>
            <h1>"Innovation and technology for gender equality"</h1>
            <h2>The thing women have yet to learn is nobody gives you power. You just take it</h2>
            <a href="/signup" class="download-btn"><ArrowRightIcon className='ArrowRightIcon'/> Register</a>
          </div>
        </div>
        <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
          <img src="https://media.istockphoto.com/id/1010593510/photo/constructing-a-new-software-design.jpg?b=1&s=170667a&w=0&k=20&c=kNer3HySq7DJUTDwlZ_ZlJmnmRpuVGzMRY1Jl5zUy5c=" class="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>
  <section id="features" class="features">
      <div class="container">

        <div class="section-title">
          <h2>App Features</h2>
          <p>A User-Friendly, Responsive Interface. A mobile app should have a user-friendly interface and be responsive interface, a Search Option. A Security-By-Design Approach

          </p>
        </div>

        <div class="row no-gutters">
          <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 icon-box" data-aos="fade-up">
                  <i class="bx bx-receipt"></i>
                  <h4>Expand</h4>
                  <p>Connect with Women professionals in all domains and expand your network</p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Explore</h4>
                  <p>Learn and browse through catalog of Tech and career resources </p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-images"></i>
                  <h4>Events</h4>
                  <p>Workshops and webinars to learn and grow together </p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i class="bx bx-shield"></i>
                  <h4>Empower</h4>
                  <p>Reduce the gender gap in Tech Industry and show the world what women are capable of!</p>
                </div>
                
              </div>
            </div>
          </div>
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="https://img.freepik.com/free-photo/high-technology-digital-graph-presentation-by-businesswoman_53876-96141.jpg" class="img-fluid" alt=""/>
          </div>
        </div>

      </div>
    </section>
    <h1 className="famous">Famous Quotes</h1>
    <div class="wrapperhome">
      
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p className="loremclass">"I think it's very important to get more women into computing. My slogan is: Computing is too important to be left to men."</p>
      <div class="content">
        <div class="info">
          <div class="name">Alexa Smithi</div>
          <div class="job">Developer</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          <img src="https://cdn.luxe.digital/media/2019/09/11223918/luxe-digital-top-linkedin-influencers-erica-hanson.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p className="loremclass">“You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.” </p>
      <div class="content">
        <div class="info">
          <div class="name">Steven Chris</div>
          <div class="job">YouTuber | Blogger</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          <img src="https://cdn.luxe.digital/media/2019/09/11223907/luxe-digital-top-linkedin-influencers-angela-ahrendts.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div class="box">
      <i class="fas fa-quote-left  quote"></i>
      <p className="loremclass">“If somebody can do something 80 percent as good as you think you would have done it yourself, then you’ve got to let it go.” </p>
      <div class="content">
        <div class="info">
          <div class="name">Kristina Bellis</div>
          <div class="job">Freelancer | Advertiser</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          <img src="https://cdn.luxe.digital/media/2019/09/11223913/luxe-digital-top-linkedin-influencers-ayesha-khanna.jpg" alt=""/>
        </div>
      </div>
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

export default Home;
