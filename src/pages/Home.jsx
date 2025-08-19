import Navbar from "../layout/Navbar";
import Button from "../components/Button";
import Image from "../components/Image";
import Heading from "../components/Heading";

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
        <div className="content-wrapper flex-row">
          <Heading level={2}>Case Studies</Heading>

          <div className="flex-row case-study">
            <div className="case-study-content">
              <h3>Case Study Title</h3>
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
                  <ul>
                    <li>Role 1</li>
                    <li>Role 2</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="case-study-image"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
