import React from "react";
import "../About/about.css";
import selfie from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";
import resume from "../../assets/resume.pdf";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="about-me" id="about">
      <div className="d-flex">
        <div className="flex-fill">
          <h1 className="about-header">About Me</h1>
          <div className="about-text">
            <p>
              With 14 years of distinguished service in the US Marine Corps as
              an Aviation Logistics Specialist, I have developed a strong
              foundation in discipline, attention to detail, and a commitment to
              excellence.
            </p>
            <p>
              From an early age, my passion for computers, programming, and
              design has been a driving force in my life. I have continually
              pursued my interest in this field, culminating in the successful
              completion of an accelerated fullstack Web development course at
              Denver University.
            </p>
            <p>
              This intensive program has equipped me with comprehensive skills
              in JavaScript, NodeJS, MongoDB, React, GraphQl, and MySQL. I have
              not only acquired proficiency but have also excelled in utilizing
              these technologies to create innovative solutions.
            </p>
            <button className="resume-btn" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>

        <TiltProfilePicture />
      </div>
    </div>
  );
};

const TiltProfilePicture = () => (
  <div className="profile-pic flex-fill">
    <Tilt
      className="tilt-img"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={800}
      scale={1.1}
      transitionSpeed={2000}
      gyroscope={true}
    >
      <img className="selfie" src={selfie} alt="selfie" />
    </Tilt>
  </div>
);

export default About;
