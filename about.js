import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './About.css';


export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About TechSheRo</h2>
        <p>TechSheRo is an online platform that showcases the work and achievements of female technology professionals with the goal of inspiring other women to consider a career in technology. It features profiles of successful female tech leaders, as well as articles and resources about various aspects of the tech industry. The platform is designed to encourage and support women who are interested in pursuing a career in technology and to help them understand the impact they can have in this field. By providing a community of like-minded individuals, TechSheRo aims to break down barriers and empower women in technology.</p>
      </div>
      <div className="about-image">
        <img src="https://content.presspage.com/uploads/1376/c1920_womenintech-299653.jpg?27902"alt="TechSheRo" class="square-image"/>
      </div>
    </div>
  );
}

