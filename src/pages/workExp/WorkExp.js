import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="1-02-2023 TO 10-05-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack web Developer intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              innomatics research labs
              </h4>
              <p>
                I worked both front-end and backend to develop the website and i have done api testing by using 
                the postman and data base Mongodb and mysql 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="01-07-2022 TO 05-09-2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Salesforce Administartion intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Salesforce
              </h4>
              <p>
                Creating the dashbords and admin panels ,assing the data ,apex trigers 
                contol access admin dashbords
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2-05-2023 TO 20-06-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Data Science Enginner intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Brainovision Solution
              </h4>
              <p>
                machine learning and training the data,statics probability
                matlab,numpy,feature engin
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="01-06-2023 TO 20-09-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              full stack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                DeepFacts
              </h4>
              <p>
              Google Cloud platform ,Angular.js ,testing i used the unitesting„Springboot tools and i used the node.js as the backend and i
can work on the api testing .In this intern i done real time project Proritham
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          
        </div>
      </div>
    </>
  );
};

export default WorkExp;
