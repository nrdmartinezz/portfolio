import Navbar from "../layout/Navbar";
import Button from "../components/Button";
import Image from "../components/Image";
import Heading from "../components/Heading";
import Carousel from "../layout/Carousel";
import YoutubeVideo from "../components/YoutubeVideo";

import FigmaSVG from "../assets/icon/figma.svg?react";
import ElementorSVG from "../assets/icon/elementor.svg?react";
import NodeSVG from "../assets/icon/nodejs.svg?react";
import ReactLogoSVG from "../assets/icon/react-logo.svg?react";
import JSLogoSVG from "../assets/icon/js.svg?react";
import IllustratorSVG from "../assets/icon/illustrator.svg?react";
import PhotoshopSVG from "../assets/icon/photoshop.svg?react";
import XDSVG from "../assets/icon/xd.svg?react";
import WordpressSVG from "../assets/icon/wordpress.svg?react";

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
            image="seoul-korea-nami-island-01_wk7omi"
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
            image="seoul-korea-nami-island-03_u2xtwg"
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
                imgClass="case-study-logo tutorlink-logo"
                image="TutorLink_Simple_Icon_3x_ngvoqz"
                width={150}
                height={50}
              ></Image>
              <h3>TutorLink</h3>
              <p className="easy-to-read">
                TutorLink was designed to make the tutoring search effortless by
                giving parents and students a centralized hub to discover,
                connect with, and book qualified tutors. Instead of juggling
                multiple platforms or messages, users can manage everything—from
                browsing to scheduling—within one streamlined application.
              </p>
              <Link className="case-study-link" to="/projects/tutorlink">
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
            <div className="flex-col tutorlink-carousel-container gap-row-12">
              <Carousel autoStep={true} className="tutorlink-carousel">
                <Image
                  imgClass="case-study-image"
                  image="home-iphone_fulpuw"
                  width={350}
                ></Image>
                <Image
                  imgClass="case-study-image"
                  image="bookings-iphone_ywzxnn"
                  width={350}
                ></Image>
                <Image
                  imgClass="case-study-image"
                  image="search-iphone_zuetwp"
                  width={350}
                ></Image>
                <Image
                  imgClass="case-study-image"
                  image="favorites-iphone_fndohg"
                  width={350}
                ></Image>
              </Carousel>
            </div>
          </div>
          <div className="flex-row case-study momentum-case-study">
            <div className="case-study-content width-55 flex-col gap-row-12">
              <Image
                imgClass="momentum-logo"
                image="Momentum_Logo_tdrlee"
                width={200}
              ></Image>
              <h3>Momentum - WIP</h3>
              <p className="easy-to-read">
                Momentum&apos;s goal is to help people with ADHD find better
                work-life balance by pairing focused work sessions with
                meaningful breaks. Instead of just counting minutes, Momentum
                uses the Pomodoro method to nudge users toward small, rewarding
                actions; Like drinking water, taking out the trash, or
                guilt-free scrolling helping keep both productivity and daily
                life on track.
              </p>
              <div className="case-links-container flex-row gap-col-12">
                {/* <Link className="case-study-link" to="/case-study/momentum">
                  View Case Study
                </Link> */}
                <Link
                  className="case-study-link"
                  to="https://momentum-pmdr.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </Link>
              </div>
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
            <div className="flex-col momentum-video-container gap-row-12">
              <YoutubeVideo
                link="https://youtu.be/RUJv0duEK-E"
                autoplay={true}
                isMute={true}
                lazyload={true}
                facade={false}
                playbackrate={2}
                showControls={false}
                start={5}
                className="youtube-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="work-samples-container">
        <div className="content-wrapper flex-row">
          <div className="work-content width-55 flex-col">
            <Heading level={2}>My Work</Heading>
            <div className="work-description flex-col gap-row-12">
              <p className="easy-to-read">
                <strong>
                  I design and build engaging websites for orthodontic and
                  dental practices that elevate the patient experience.
                </strong>
                <br /> Using Figma, I create custom layouts that highlight each
                practice’s unique brand, then collaborate with my team to bring
                those designs to life in WordPress with Elementor. The result is
                a site that not only looks great, but also helps practices
                connect with patients in a meaningful way.
              </p>
            </div>

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
                    <ElementorSVG></ElementorSVG>
                  </span>
                  Elementor
                </li>
                <li className="tech-item">
                  <span>
                    <WordpressSVG></WordpressSVG>
                  </span>
                  Wordpress
                </li>
              </ul>
            </div>
          </div>
          <div className="work-slideshow-container">
            <Carousel className="work-carousel">
              <div className="work-slide">
                <div className="work-slide-img">
                  <Link
                    target="_blank"
                    to={"https://shafer.newpatientgroup.dev/"}
                  >
                    <Image
                      image="screencapture-shafer-newpatientgroup-dev-2025-09-05-14_31_28-1_rudfok"
                      width={1192}
                      height={3880}
                    />
                  </Link>
                </div>
              </div>
              <div className="work-slide flex-col gap-row-12">
                <div className="work-slide-img">
                  <Link target="_blank" to={"https://coombsorthoco.com/"}>
                    <Image
                      image="screencapture-coombsorthoco-2025-09-05-14_34_03-1_psb7h5"
                      width={1192}
                      height={2824}
                    />
                  </Link>
                </div>
              </div>
              <div className="work-slide flex-col gap-row-12">
                <div className="work-slide-img">
                  <Link target="_blank" to={"https://olsenortho.com/"}>
                    <Image image="Home-page_eddyha" width={960} height={1820} />
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="contact-us-container">
        <div className="content-wrapper flex-row">
          <div className="flex-col width-55">
            <Heading level={2}>Let&#39;s Work Together</Heading>

            <div className="flex-row">
              <ul className="social-list">
                <li className="social-item">tik tok</li>
                <li className="social-item">instagram</li>
                <li className="social-item">linkedin</li>
              </ul>
            </div>
            <p>
              I am currently available for freelance work and open to new
              opportunities. If you have a project in mind, feel free to reach
              out!
            </p>
            <Link
              className="case-study-link"
              to="mailto:nrd.martinezz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </Link>
          </div>
          <div className="flex-col width-content contact-image">
            <Image
              image="seoul-korea-nami-island-vert_mxkyiu"
              width={400}
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
