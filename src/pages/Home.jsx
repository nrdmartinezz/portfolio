import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Image from "../components/Image";

let Home = () => {

  return (
    <div className="flex-col">
      <Navbar></Navbar>
      <div className="hero-container">
        <div className="content-wrapper">
          <Image imgClass="hero-image" image="1689533209966_uszpqy" width={225} height={225}></Image>
          <h1>Hello, I&#39;m Nate Martinez</h1>
          <ul className="portfolio-titles">
            <li>Web Developer</li>
            <li>UI/UX Designer</li>
            <li>Open Source Enthusiast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
