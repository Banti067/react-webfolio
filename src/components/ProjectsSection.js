/* eslint-disable no-dupe-keys */
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { AnimationOnScroll } from "react-animation-on-scroll";

const projects = [
  {
    title: "Covi-19",
    getImageSrc: () => require("../images/project 1.png"),
    liveLink: "https://banti067.github.io/Covi-19/",
    ghLink: "https://github.com/Banti067/Covi-19",
  },
  {
    title: "React Portfolio",
    getImageSrc: () => require("../images/project 2.png"),
    liveLink: "",
    ghLink: "",
  },
  {
    title: "Movie Search Site",
    getImageSrc: () => require("../images/project 3.png"),
    liveLink: "https://banti067.github.io/BollyFlix.github.dev/",
    ghLink: "https://github.com/Banti067/BollyFlix.github.dev",
  },
];

const ProjectsSection = () => {

  return (
    <FullScreenSection
      p={8}
      alignItems="center"
      spacing={8}
      id="projects-section"
    >

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" animateOnce={true}>
      <Heading as="h1">
        <span className="purple">Featured</span> Projects
      </Heading>
      </AnimationOnScroll>
      <Box
        className="projectBox"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            liveLink={project.liveLink}
            ghLink={project.ghLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;