import React from 'react';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/aboutAJ.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/college.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Sahyadri College of Engineering and Management</h3>
              <p>
                Bachelor of Engineering in Computer Science and Engineering{' '}
                <br />
                2021-2025
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/college.png"
                alt="Education icon"
                className="icon"
              />
              <h3>B.E.M Higher Secondary School, Kasargod</h3>
              <p>
                Class XII/Pre-University Education
                <br />
                2019-2021
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/college.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Chinmaya Vidyalaya Vidyanagar Kasargod</h3>
              <p>
                Class X (CBSE)
                <br />
                2019
              </p>
            </div>
          </div>
          <div className="text-container details-container">
            <p>
              BE CSE Graduate | MERN Stack Developer | C++ & DSA Enthusiast |
              Software Developer | Web Security & Testing | Tech Explorer
            </p>
            <br />
            <p style={{ textAlign: 'justify', marginRight: '1rem' }}>
              I am a Computer Science Engineering graduate from Sahyadri College
              of Engineering and Management. I have technical skills in C++, C,
              JavaScript, SQL, HTML, CSS, and Bash, with experience in
              frameworks like React.js, Node.js, Express.js, Bootstrap, and
              Tailwind. I work with MongoDB and MySQL, and am proficient with
              tools such as Git, VS Code, Postman, Burp Suite, Nmap, and
              Wireshark. Comfortable in Linux and macOS, I understand
              client-server architecture, RESTful APIs, responsive design, and
              software design principles.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.href = './#experience';
        }}
      />
      <img
        src="./assets/arrowup.png"
        alt="Arrowup iconup"
        className="iconup arrowup"
        onClick={() => {
          window.location.href = './#desktop-nav';
        }}
      />
    </section>
  );
};

export default About;
