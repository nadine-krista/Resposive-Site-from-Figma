import React from "react";
import "./Info.css";
import { studentImage, recordPlayer, topLeft } from "../../assets/images";

const Info = () => {
  return (
    <section className="dark-gray" id="info">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentImage} />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={recordPlayer} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>

        <img src={topLeft} className="top-left-elem" />
      </div>
    </section>
  );
};

export default Info;
