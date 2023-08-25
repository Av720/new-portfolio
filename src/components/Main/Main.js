import React from "react";
import "../../components/Main/main.css";
import coding from "../../assets/coding.jpg";
import Type from "./Type";

const CodingImage = () => (
  <div className="introduction flex-fill">
    <img src={coding} className="coding-img" alt="coding" />
  </div>
);

const IntroductionText = () => (
  <div className="intro-text flex-fill">
    <h1 className="greeting">
      Hi I'm Aldo!{" "}
      <span className="wave" role="img" aria-labelledby="wave">
        👋🏻
      </span>
    </h1>
    <p className="greeting-txt">
      <Type />
    </p>
  </div>
);

function Main() {
  return (
    <div className="" id="main">
      <div className="d-flex">
        <CodingImage />
        <IntroductionText />
      </div>
    </div>
  );
}

export default Main;
