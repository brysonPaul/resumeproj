import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faE, faFile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";


export default function Bar() {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <Navbar isBordered isBlurred={false} variant="sticky" style={{ width: "100%", backgroundColor: "" }}>
      <NavbarContent style={{ width: "1%", display: "flex", justifyContent: "space-around", flexGrow: 1, gap:75 }}>
        <NavbarItem>
          <Link color="foreground" href= {"/"} size="lg" >
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="about" size="lg">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="experiences" size="lg">
            Experiences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="projects" size="lg">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="keyboards" size="lg">
            Keyboards
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent style={{ justifyContent: "flex-end", gap:50 }}>

        <a className="icon-links flex flex-col" href="https://www.linkedin.com/in/bryson-paul/">
          <FontAwesomeIcon icon={faLinkedinIn} title="View my LinkedIn"/>
        </a>
        <a className="icon-links flex flex-col" href={(isProd?"/resumeproj":" ")+"/Resume.pdf"} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} title="View my Resume"/>
        </a>
        <a className="icon-links" href="mailto:brysonpaul1870@gmail.com" target="_blank" rel="noopener noreferrer" type="application/pdf">
          <FontAwesomeIcon icon={faEnvelope} title="Send me an email!"/>
        </a>


      </NavbarContent>


    </Navbar>
  );
}
