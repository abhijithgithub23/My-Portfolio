import React from 'react';

const Hero = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="Abhijith profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Abhijith </h1>
        <p className="section__text__p2">Software Engineer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/ABHIJITH_RESUME.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => {
              window.location.href = './#contact';
            }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon1"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/abhijith-a-1303481a1/',
                '_blank'
              )
            }
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon1"
            onClick={() =>
              window.open('https://github.com/abhijithgithub23', '_blank')
            }
          />
          <img
            src="./assets/leetcode.png"
            alt="My Leetcode profile"
            className="icon1"
            onClick={() =>
              window.open('https://leetcode.com/u/ab__jit/', '_blank')
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
