import Navbar from "../layout/Navbar";
import Button from "../components/Button";
import Image from "../components/Image";
import Heading from "../components/Heading";
import WorkCarousel from "../layout/Carousel";

import FigmaSVG from "../assets/icon/figma.svg?react";
import ElementorSVG from "../assets/icon/elementor.svg?react";
import NodeSVG from "../assets/icon/nodejs.svg?react";
import ReactLogoSVG from "../assets/icon/react-logo.svg?react";
import JSLogoSVG from "../assets/icon/js.svg?react";
import IllustratorSVG from "../assets/icon/illustrator.svg?react";
import PhotoshopSVG from "../assets/icon/photoshop.svg?react";
import XDSVG from "../assets/icon/xd.svg?react";

import UXSVG from "../assets/icon/ux.svg?react";
import UISVG from "../assets/icon/ui.svg?react";
import DevSVG from "../assets/icon/code-window.svg?react";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <div className="flex-col">
      <Navbar></Navbar>
      <section className="hero-container">
        <div className="hero-content-wrapper content-wrapper">
          <Image
            imgClass="hero-image"
            image="1689533209966_uszpqy"
            width={225}
            height={225}
          ></Image>
          <h1>Hello, I&#39;m Nate Martinez</h1>
          <ul className="portfolio-titles">
            <li>Web Developer</li>
            <li>UI/UX Designer</li>
            <li>Open Source Enthusiast</li>
          </ul>
          <div className="flex-row hero-btns">
            <Button icon={"arrow"} text={"View Work"}></Button>
            <Button
              className="white-btn"
              icon={"arrow"}
              text={"Contact Me"}
            ></Button>
          </div>
        </div>
      </section>

      <section className="about-container">
        <div className="content-wrapper flex-row">
          <Image
            imgClass="about-image"
            image="1689533209966_uszpqy"
            width={352}
            height={352}
          ></Image>
          <div className="about-text flex-col">
            <Heading level={2}>About Me</Heading>
            <p>
              I am a passionate web developer with a focus on creating
              user-friendly and accessible web applications. My goal is to
              deliver high-quality software solutions that meet the needs of
              users and businesses alike.
            </p>
            <Button icon={"arrow"} text="View Work" link="/about" />
          </div>
        </div>
      </section>

      <section className="case-studies-container">
        <div className="content-wrapper flex-col">
          <Heading level={2}>Case Studies</Heading>

          <div className="flex-row case-study">
            <div className="case-study-content width-55 flex-col gap-row-12">
              <Image
                imgClass="case-study-img"
                image="TutorLink_Simple_Icon_3x_ngvoqz"
                width={150}
              ></Image>
              <h3>TutorLink</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus fringilla vehicula. Curabitur rutrum in nisl
                nec auctor. Aenean semper mauris mauris, faucibus fermentum diam
                iaculis feugiat. Aenean non tempor libero. Phasellus semper
                libero at turpis maximus, vitae interdum purus venenatis. Nulla
                facilisi. Suspendisse nec felis eleifend, maximus ligula nec,
                fringilla mauris. Etiam ultricies enim ac lacus molestie rutrum.
                Sed gravida eros ac dui porttitor, ac pretium odio tincidunt.
                Donec in lorem lectus. Sed gravida nunc eu magna fringilla, sed
                vehicula ipsum ultricies. Aliquam at elementum ex.
              </p>
              <Link className="case-study-link" to="/case-study/momentum">
                  View Case Study
                </Link>
              <div className="flex-row">
                <div className="flex-col width-35">
                  <h4>Technologies Used</h4>
                  <ul className="tech-list">
                    <li className="tech-item">
                      <span>
                        <FigmaSVG></FigmaSVG>
                      </span>
                      Figma
                    </li>
                    <li className="tech-item">
                      <span>
                        <IllustratorSVG></IllustratorSVG>
                      </span>
                      Adobe Illustrator
                    </li>
                    <li className="tech-item">
                      <span>
                        <XDSVG></XDSVG>
                      </span>
                      Adobe XD
                    </li>
                  </ul>
                </div>
                <div className="flex-col width-65">
                  <h4>Roles</h4>
                  <ul className="role-list">
                    <li className="role-item">
                      <span>
                        <UXSVG></UXSVG>
                      </span>
                      UX Researcher
                    </li>
                    <li className="role-item">
                      <span>
                        <UISVG></UISVG>
                      </span>
                      UI Designer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-col case-study-image gap-row-12">
              <Image
                imgClass="case-study-img"
                image="1689533209966_uszpqy"
                width={352}
              ></Image>
            </div>
          </div>
          <div className="flex-row case-study">
            <div className="case-study-content width-55 flex-col gap-row-12">
              <Image
                imgClass="case-study-img"
                image="Momentum_Logo_tdrlee"
                width={200}
              ></Image>
              <h3>Momentum</h3>
              <p>
                Momentum is a smart Pomodoro-based productivity app designed to
                help people—especially those with ADHD—get things done without
                feeling overwhelmed. Unlike a simple timer, Momentum integrates
                task tracking and encourages users to use their Pomodoro breaks
                to knock out quick household chores while staying focused on
                work. It bridges the gap between professional productivity and
                everyday life, making it easier to build momentum, one task at a
                time.
              </p>
              <span className="flex-row gap-col-12">
                <Link className="case-study-link" to="/case-study/momentum">
                  View Case Study
                </Link>
                <Link
                  className="case-study-link"
                  to="https://momentum-pmdr.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </Link>
              </span>
              <div className="flex-row">
                <div className="flex-col">
                  <h4>Technologies Used</h4>
                  <ul className="tech-list">
                    <li className="tech-item">
                      <span>
                        <FigmaSVG></FigmaSVG>
                      </span>
                      Figma
                    </li>
                    <li className="tech-item">
                      <span>
                        <IllustratorSVG></IllustratorSVG>
                      </span>
                      Adobe Illustrator
                    </li>
                    <li className="tech-item">
                      <span>
                        <PhotoshopSVG></PhotoshopSVG>
                      </span>
                      Adobe Photoshop
                    </li>
                    <li className="tech-item">
                      <span>
                        <JSLogoSVG></JSLogoSVG>
                      </span>
                      JavaScript
                    </li>
                    <li className="tech-item">
                      <span>
                        <ReactLogoSVG></ReactLogoSVG>
                      </span>
                      React
                    </li>
                    <li className="tech-item">
                      <span>
                        <NodeSVG></NodeSVG>
                      </span>
                      Node.js
                    </li>
                  </ul>
                </div>
                <div className="flex-col">
                  <h4>Roles</h4>
                  <ul className="role-list">
                    <li className="role-item">
                      <span>
                        <UXSVG></UXSVG>
                      </span>
                      UX Researcher
                    </li>
                    <li className="role-item">
                      <span>
                        <UISVG></UISVG>
                      </span>
                      UI Designer
                    </li>
                    <li className="role-item">
                      <span>
                        <DevSVG></DevSVG>
                      </span>
                      Web Developer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-col case-study-image gap-row-12">
              <Image
                imgClass="case-study-img"
                image="1689533209966_uszpqy"
                width={352}
              ></Image>
            </div>
          </div>
          <div className="flex-row case-study">
            <div className="case-study-content width-55 flex-col gap-row-12">
              <h3>Shafer Orthodontics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus fringilla vehicula. Curabitur rutrum in nisl
                nec auctor. Aenean semper mauris mauris, faucibus fermentum diam
                iaculis feugiat. Aenean non tempor libero. Phasellus semper
                libero at turpis maximus, vitae interdum purus venenatis. Nulla
                facilisi. Suspendisse nec felis eleifend, maximus ligula nec,
                fringilla mauris. Etiam ultricies enim ac lacus molestie rutrum.
                Sed gravida eros ac dui porttitor, ac pretium odio tincidunt.
                Donec in lorem lectus. Sed gravida nunc eu magna fringilla, sed
                vehicula ipsum ultricies. Aliquam at elementum ex.
              </p>
              <div className="flex-row">
                <div className="flex-col">
                  <h4>Technologies Used</h4>
                  <ul>
                    <li>Technology 1</li>
                    <li>Technology 2</li>
                    <li>Technology 3</li>
                  </ul>
                </div>
                <div className="flex-col">
                  <h4>Roles</h4>
                  <ul className="role-list">
                    <li className="role-item">
                      <span>
                        <UXSVG></UXSVG>
                      </span>
                      UX Researcher
                    </li>
                    <li className="role-item">
                      <span>
                        <UISVG></UISVG>
                      </span>
                      UI Designer
                    </li>
                    <li className="role-item">
                      <span>
                        <DevSVG></DevSVG>
                      </span>
                      Web Developer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-col case-study-image gap-row-12">
              <Image
                imgClass="case-study-img"
                image="1689533209966_uszpqy"
                width={352}
                height={352}
              ></Image>
              <Button icon={"arrow"} text={"View Case Study"}></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="work-samples-container">
        <div className="content-wrapper flex-row">
          <div className="work-content flex-col">
            <Heading level={2}>My Work</Heading>
            <h3>Short Scope, 3 Months</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra odio id lacus auctor pharetra. Donec varius, sapien id
              dignissim efficitur, metus lorem gravida quam,
            </p>
            <h4>Tech</h4>
            <ul className="flex-row work-tech">
              <li>React</li>
              <li>Node.js</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="work-slideshow-container">
            <WorkCarousel className="work-carousel">
              <div className="work-slide flex-col gap-row-12">
                <Image
                  imgClass="work-slide-img"
                  image="1689533209966_uszpqy"
                  width={325}
                  height={570}
                ></Image>
                <Button
                  className="work-slide-btn"
                  icon={"arrow"}
                  text={"View Site"}
                ></Button>
              </div>
              <div className="work-slide flex-col gap-row-12">
                <Image
                  imgClass="work-slide-img"
                  image="1689533209966_uszpqy"
                  width={325}
                  height={570}
                ></Image>
                <Button
                  className="work-slide-btn"
                  icon={"arrow"}
                  text={"View Site"}
                ></Button>
              </div>
              <div className="work-slide flex-col gap-row-12">
                <Image
                  imgClass="work-slide-img"
                  image="1689533209966_uszpqy"
                  width={325}
                  height={570}
                ></Image>
                <Button
                  className="work-slide-btn"
                  icon={"arrow"}
                  text={"View Site"}
                ></Button>
              </div>
            </WorkCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
