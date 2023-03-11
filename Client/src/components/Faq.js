import React from 'react'
import './style.css';
export const Faq = () => {
    const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});
  return (
    <>
    <div className="faqs-container">
      <h2 id="FAQ">Frequently Asked Questions</h2>

      <div className="questions-container">
        <div className="content-container">
          <div className="faq-header">
            <h3>How do I register here?</h3>
            <span className="open active">+</span>
            <span className="close">-</span>
          </div>

          <div className="content">
            <p>
              You can register here by clicking "Register" button in the navigation menu.
            </p>
          </div>
        </div>

        <div className="content-container">
          <div className="faq-header">
            <h3>How is this platform beneficial for me?</h3>
            <span className="open active">+</span>
            <span className="close">-</span>
          </div>

          <div className="content">
            <p>
              Our platform enables women all over the world to connect with one another, seek guidance from women tech leaders, and encourage more women developers to pursue careers in IT to create a sustainable and inclusive future for all.
            </p>
          </div>
        </div>

        <div className="content-container">
          <div className="faq-header">
            <h3>How to I seek guidance from leading women tech leaders?</h3>
            <span className="open active">+</span>
            <span className="close">-</span>
          </div>

          <div className="content">
            <p>
              In the profile section, you can connect with the women leaders  through linkedin.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
