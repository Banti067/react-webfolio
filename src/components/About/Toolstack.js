import React from "react";
import {HStack, VStack} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';
import {
  SiWindows11,
  SiLinux,
  SiVisualstudiocode,
  SiGit,
  SiJupyter,
  SiNpm,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <HStack style={{ justifyContent: "center", paddingBottom: "10%", width:"90%", display:"flex", flexWrap:"wrap"}}>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
        <VStack className={"tech-stack-flex"}>
          <SiGithub className="tech-icons"/>
          <p>Github</p>
        </VStack>
      </AnimationOnScroll>  

      
      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" delay="1" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiWindows11 className="tech-icons"/>
        <p>Windows</p>
      </VStack>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiVisualstudiocode className="tech-icons"/>
        <p>VS Code</p>
      </VStack>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="1.5" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiGit className="tech-icons"/>
        <p>Git</p>
      </VStack>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" delay="1" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiJupyter className="tech-icons" />
        <p>Jupyter</p>
      </VStack>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="1.5" delay="2" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiLinux className="tech-icons"/>
        <p>Linux</p>
      </VStack>
      </AnimationOnScroll>
      
      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiNpm className="tech-icons"/>
        <p>NPM</p>
      </VStack>
      </AnimationOnScroll>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </HStack>
  );
}

export default Toolstack;