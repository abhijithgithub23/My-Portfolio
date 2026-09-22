import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:abhijithksd23@gmail.com">abhijithksd23@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/abhijith-a-1303481a1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            &nbsp;&nbsp;
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/mob.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a>+91 6282964400</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
