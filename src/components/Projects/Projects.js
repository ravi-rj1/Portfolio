import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aarks from "../../Assets/Projects/aarks.png";
import coinvoy from "../../Assets/Projects/coinvoy.png";
import teleplay from "../../Assets/Projects/teleplay.png";
import hangmanGame from "../../Assets/Projects/hangmanGame.png";
import pahiyawala from "../../Assets/Projects/pahiyawala.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aarks}
              isBlog={false}
              title="AARKS Solution"
              description="This website aims to ease the commute for an area like universities, colleges, schools, research centres, IT parks etc. by the help of bicycle riding giving an ease of parking and increase the greener part of environment. Mainly aim to reduce the carbon emission and pollution in the environment. The website is built using PHP, MySQL, JavaScript, HTML, CSS and implemetation and future use of IoTs."
              ghLink="#link of github"
              demoLink="vercel ink of same project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pahiyawala}
              isBlog={false}
              title="Pahiyawala"
              description="Taking a dive in the emerging field of e-vehicles, this website aims to prvide all the details of the e-vehicles available in the market. It also provides a platform for the users to share their reviews and experiences with the e-vehicles. The website is built using PHP, MySQL, JavaScript, HTML, CSS."
              ghLink="https://github.com/ravi-rj1/PahiyaWala.git"
              demoLink="https://pahiyawala.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teleplay}
              isBlog={false}
              title="Teleplay"
              description="While going to watching movies, checking ratings on different platforms, booking tickets with a different platform.. these all are becoming so backwards nowadays. Let's make it simple. Teleplay is a web application that allows you to search for movies, check their ratings, book tickets and watch trailers all in one place. The website is built using ReactJS, NodeJS, JavaScript, HTML, CSS, MySQL."
              ghLink="https://github.com/ravi-rj1/TelePlay.git"
              demoLink="https://teleplay.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinvoy}
              isBlog={false}
              title="Coinvoy"
              description="Developed a responsive web app that tracks real-time cryptocurrency prices and exchange listings. Integrated APIs to fetch live data on over 15 top cryptocurrency exchanges and major coins like BTC, ETH, and XRP. Implemented interactive price charts, currency conversion (INR, USD, EUR), and detailed coin analytics including market cap, supply, and historical trends. Tech stack used are React.js, Chart.js, REST APIs, CSS, HTML, Vercel "
              ghLink="https://github.com/ravi-rj1/Coinvoy.git"
              demoLink="https://coinvoy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangmanGame}
              isBlog={false}
              title="Hangman Game"
              description="Built a browser-based Hangman game using React, where users guess letters to reveal a hidden word while avoiding incorrect guesses that complete the hangman figure. Designed intuitive UI with dynamic letter buttons and real-time game logic.Features include random word generation, visual feedback, and restart functionality.Tech stack used are React.js, JavaScript, CSS, HTML, Vercel"
              ghLink="https://github.com/ravi-rj1/Hangman-Game.git"
              demoLink="https://hangman-game-mu-eight.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
