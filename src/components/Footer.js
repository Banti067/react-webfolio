import React from "react";
import {Box, Flex, HStack} from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: pbanti8249@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Banti067",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/p-banti-367a20193/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/BantiTweets",
  },
];

const Footer = () => {
  return (
    <Box className="mainSection2">
      <footer>
      <MediaQuery minWidth={830}>
      <Flex
          margin="0% auto"
          padding={"1rem 0 0 0"}
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
        >
          <span className="purple"> CONNECT WITH ME HERE! </span>
        </Flex>

        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={14}
        >
          <MediaQuery maxWidth={1000}>
          <HStack className="left-nav" spacing={"5vw"}>
              <a href={socials[0].url} target="_blank" aria-label="Email" rel="noreferrer" ><FontAwesomeIcon icon={socials[0].icon} size="xl" /></a>
              <a href={socials[1].url} target="_blank" aria-label="Git Hub" rel="noreferrer" ><FontAwesomeIcon icon={socials[1].icon} size="xl" /></a>
              <a href={socials[2].url} target="_blank" aria-label="LinkedIn" rel="noreferrer" ><FontAwesomeIcon icon={socials[2].icon} size="xl" /></a>
              <a href={socials[3].url} target="_blank" aria-label="Twitter" rel="noreferrer" ><FontAwesomeIcon icon={socials[3].icon} size="xl" /></a>
            </HStack>
            </MediaQuery>
            <MediaQuery minWidth={1001}>
          <HStack className="left-nav" spacing={"10"}>
              <a href={socials[0].url} target="_blank" aria-label="Email" rel="noreferrer" ><FontAwesomeIcon icon={socials[0].icon} size="xl" /></a>
              <a href={socials[1].url} target="_blank" aria-label="Git Hub" rel="noreferrer" ><FontAwesomeIcon icon={socials[1].icon} size="xl" /></a>
              <a href={socials[2].url} target="_blank" aria-label="LinkedIn" rel="noreferrer" ><FontAwesomeIcon icon={socials[2].icon} size="xl" /></a>
              <a href={socials[3].url} target="_blank" aria-label="Twitter" rel="noreferrer" ><FontAwesomeIcon icon={socials[3].icon} size="xl" /></a>
            </HStack>
            </MediaQuery>
        </Flex>
        <hr className={"footerLine"}/>
        <Flex
          margin="0% auto"
          paddingTop={"2%"}
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={12}
          paddingBottom="2%"
        >
          <p> © 2023 Banti All Right Reserved </p>
        </Flex>
        </MediaQuery>
        <MediaQuery maxWidth={829}>
        <Flex
          margin="0% auto"
          paddingTop={"5%"}
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={12}
          paddingBottom="20%"
        >
          <p> © 2023 Banti All Right Reserved </p>
        </Flex>
        </MediaQuery>

      </footer>
    </Box>
  );
};
export default Footer;