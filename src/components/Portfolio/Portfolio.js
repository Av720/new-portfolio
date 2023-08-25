import React from "react";
import "../Portfolio/portfolio.css";
import mercury from "../../assets/mercury.png";
import notetaker from "../../assets/notetaker.png";
import passwordgen from "../../assets/passwordgen.png";
import travelbuddy from "../../assets/travelbuddy.png";
import weatherdash from "../../assets/weatherdash.png";
import codequiz from "../../assets/codequiz.png";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="port-header">MY PORTFOLIO</h1>

      <div className="cards">
        <div className="first-row d-flex justify-content-evenly">
          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card" id="card">
              <img src={mercury} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mercury POS</h5>
                <p className="card-text">
                  A complete Pont Of Sale Application for any restaurant owners.
                </p>
                <a
                  href="https://mercury-pos.herokuapp.com/"
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/therealsweven/full-stack-pantheon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card">
              <img src={travelbuddy} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Travel Buddy</h5>
                <p className="card-text">
                  Travel Buddy is an app designed to be your personal planner on
                  your next trip!
                </p>
                <a
                  href="https://hollyhleal.github.io/travel-buddy/"
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/hollyhleal/travel-buddy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card ">
              <img src={notetaker} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">
                  This is an application where it canbe used to write and save
                  and delete your notes.
                </p>
                <a
                  href="https://fast-cove-47826.herokuapp.com/"
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/Av720/Note-Taker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        {/* closing of first row */}

        <div className="second-row d-flex justify-content-evenly">
          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card">
              <img src={passwordgen} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  Password Generator will create a random password accoring to
                  the user input.
                </p>
                <a
                  href="https://av720.github.io/Password-Generator/"
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/Av720/Password-Generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card">
              <img src={weatherdash} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                  Weather Dashboard allows users to search a U.S. city and
                  receive current weather forecast.
                </p>
                <a
                  href="https://av720.github.io/Weather-Dashboard/"
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/Av720/Weather-Dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltAngleXInitial={2} tiltAngleYInitial={2}>
            <div className="card">
              <img src={codequiz} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JS Code Quiz </h5>
                <p className="card-text">
                  A timed JavaScript coding quiz that will challenge your basic
                  knowledge with given questions.
                </p>
                <a
                  href="https://av720.github.io/Code-Quiz/"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Site
                </a>
                <a
                  className="repo-link btn"
                  href="https://github.com/Av720/Code-Quiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        {/* closing of second row */}
      </div>
    </div>
  );
}

export default Portfolio;
