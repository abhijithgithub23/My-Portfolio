import React, { useRef } from 'react';

const Projects = () => {
  const wrapperRef = useRef(null);

  const scrollProjects = (direction) => {
    if (wrapperRef.current) {
      const scrollAmount = 320;
      wrapperRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <button
          className="scroll-btn left-btn"
          onClick={() => scrollProjects(-1)}
        >
          &#10094;
        </button>
        <div className="projects-wrapper" ref={wrapperRef}>
          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/E-Commerce.png"
                alt="Project 3"
                className="project-img fullStackImg"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              E-Commerce Website
            </h2>
            <h3 className="project-card-description">
              Full Stack MERN Web Application
            </h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/E-commerce-Website'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open('https://e-commerce-website-ta43.onrender.com/')
                }
              >
                Web App Link
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/fullstack.png"
                alt="Project 3"
                className="project-img fullStackImg"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Airbnb Clone
            </h2>
            <h3 className="project-card-description">
              Full Stack Web Application-MVC
            </h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/my-airbnb-clone'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://my-airbnb-clone-8989.onrender.com/listings'
                  )
                }
              >
                Web App Link
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/whiteboard.png"
                alt="Project 3"
                className="project-img fullStackImg"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Collaborative Whiteboard
            </h2>
            <h3 className="project-card-description">
              Full Stack MERN Web Application
            </h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/Collaborative-Whiteboard-Application'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://collaborative-whiteboard-application.onrender.com/room/test123'
                  )
                }
              >
                Web App Link
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/weather-image.png"
                alt="Project 3"
                className="project-img fullStackImg"
              />
            </div>
            <h2 className="experience-sub-title project-title">Weather App</h2>
            <h3 className="project-card-description">Vite + React</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/Weather-App'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open('https://aj-weather-now.netlify.app/')
                }
              >
                Web App Link
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/simon-game.png"
                alt="Project 3"
                className="project-img fullStackImg"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Simon Says Game
            </h2>
            <h3 className="project-card-description">JavaScript</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/Simon-Says-Game'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open('https://simon-says-game-web.netlify.app/')
                }
              >
                Web App Link
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/sepsis.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Early Sepsis Detection System
            </h2>
            <h3 className="project-card-description">Machine Learning Model</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/Sepsis-prediction-machine'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open('./assets/PredictionOfSepsis.pdf')
                }
              >
                Report
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/gym.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Gym Management System
            </h2>
            <h3 className="project-card-description">DBMS Project</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/Swas23/DBMS-project',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('./assets/gms.pdf')}
              >
                Report
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/multipleface.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Multiple Face Recognition and Detection
            </h2>
            <h3 className="project-card-description">Machine Learning Model</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/multiple-face-recognition-and-detection',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('./assets/facedetection.pdf')}
              >
                Report
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="article-container">
              <img
                src="./assets/rubberducky.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Python Automation & Keystroke Simulation Tool
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/abhijithgithub23/UsbRubberDucky',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('./assets/rubberducky.pdf')}
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <button
          className="scroll-btn right-btn"
          onClick={() => scrollProjects(1)}
        >
          &#10095;
        </button>
      </div>
      <br />

      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.href = './#contact';
        }}
      />
      <img
        src="./assets/arrowup.png"
        alt="Arrowup iconup"
        className="iconup arrowup"
        onClick={() => {
          window.location.href = './#experience';
        }}
      />
    </section>
  );
};

export default Projects;
