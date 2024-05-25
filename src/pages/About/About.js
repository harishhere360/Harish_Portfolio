import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
      
                src="ha.JPG"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              full stack developer, I can possess the knowledge and 
              experience to work on both the front-end and back-end 
              of web applications. I can design, develop, and maintain 
              web applications, ensuring they are responsive, user-friendly, 
              and efficient and also i have knowledge on the data sciecnce and i done 
              data science internship also and salesforce administartion
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
