import React from "react";
import Card from "react-bootstrap/Card";
import {AiFillCaretRight} from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
          <p className={"aboutCard"}>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
            Hi Everyone, I am <span className="purple">P Banti </span>
            from <span className="purple"> Odisha, India. </span>
            <span> Currently pursuing</span><span className="purple"> B.Tech</span> in<span className="purple"> Computer Science & Enginnering</span> from Gandhi Institute For Education and Technology, Baniatangi.
            <br></br>
            <br />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
              I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.
              <br></br>
              <br />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
              I value minimalistic designs, thoughtful branding of the content and customer relatable experience. Let's discover together how we can make your project convert better!
              <br></br>
              <br />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" animateOnce={true}>
              Apart from coding, some other activities that I love to!
            </AnimationOnScroll>
          </p>
          <ul>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration="1" delay="500" animateOnce={true}>
          {/* <AnimationOnScroll animateIn="animate__fadeInRight" duration="3" delay="1400" animateOnce={true}> */}
          {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="3" delay="1400" animateOnce={true}> */}
            <li className="about-activity">
               <AiFillCaretRight className={"aboutHobbies"} /> Play Football
            </li>
          </AnimationOnScroll>
          
            <AnimationOnScroll animateIn="animate__fadeInUp"  duration="1" delay="900" animateOnce={true}>
            <li className="about-activity">
            <AiFillCaretRight className={"aboutHobbies"} /> Swimming and Riding
            </li>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" duration="1" delay="1700" animateOnce={true}>
            <li className="about-activity">
            <AiFillCaretRight className={"aboutHobbies"}/> Travelling
            </li>
            </AnimationOnScroll>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siddharth K.</footer> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;