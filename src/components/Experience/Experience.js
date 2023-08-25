import React from "react";
import "../Experience/experience.css";
import css from "../../assets/languages/css.png";
import express from "../../assets/languages/express.png";
import html from "../../assets/languages/html.png";
import mysql from "../../assets/languages/mysql.png";
import node from "../../assets/languages/node.png";
import react from "../../assets/languages/react.png";
import javascript from "../../assets/languages/javascript.png";
import mongodb from "../../assets/languages/mongodb.png";

const Language = ({ imgSrc, altText, text, className }) => (
  <div className="languages justify-content-center">
    <img className={`lang-logo ${className}`} src={imgSrc} alt={altText} />
    <p className="lang-text">{text}</p>
  </div>
);

function Experience() {
  const languagesData = [
    { imgSrc: html, altText: "HTML", text: "HTML", className: "html" },
    { imgSrc: css, altText: "CSS", text: "CSS", className: "css" },
    {
      imgSrc: javascript,
      altText: "JavaScript",
      text: "JavaScript",
      className: "js",
    },
    { imgSrc: react, altText: "React", text: "React", className: "react" },
    {
      imgSrc: express,
      altText: "Express",
      text: "Express",
      className: "express",
    },
    { imgSrc: node, altText: "NodeJS", text: "NodeJS", className: "node" },
    {
      imgSrc: mongodb,
      altText: "MongoDB",
      text: "MongoDB",
      className: "mongo",
    },
    { imgSrc: mysql, altText: "MySQL", text: "MySQL", className: "mysql" },
  ];

  return (
    <div className="experience" id="experience">
      <div className="main-header">
        <h1 className="header-text">EXPERIENCE</h1>
      </div>

      <p className="experience-txt">
        These are the technologies I've leveraged in my projects.
      </p>

      <div className="first-exp-row d-flex">
        {languagesData.slice(0, 4).map((lang) => (
          <Language key={lang.text} {...lang} />
        ))}
      </div>

      <div className="second-exp-row d-flex">
        {languagesData.slice(4).map((lang) => (
          <Language key={lang.text} {...lang} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
