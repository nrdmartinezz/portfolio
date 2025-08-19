import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Image from "../components/Image";

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
            <Button className="white-btn" icon={"arrow"} text={"View Work"}></Button>
            <Button icon={"arrow"} text={"Contact Me"}></Button>
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
            <h2>About Me</h2>
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
    </div>
  );
};

export default Home;
