import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Image from "../components/Image";

let Home = () => {
  let [Projects, setProjects] = useState([]);
  let projectMenuItems = [];

  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  Projects.forEach((project, i) => {
    console.log(project, project.title);
    projectMenuItems.push(
      <li
        className={"project-menu-item " + project.title}
        key={project.title + "_" + i}
      >
        <Link to={"/project/" + project.title} state={{ project: project }}>
          {project.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="app-content">
        <div className="title-container">
          <div className="title-content-wrapper">
            <Image
              imgClass={"profile-image"}
              width={325}
              height={200}
              image={"ProfileImage2023_jlyyjl"}
            ></Image>
            <h1 className="title arboria-bold">
              <div className="accent-text">
                Hi! I&apos;m
                <br />
              </div>
              Nate Martinez
            </h1>
          </div>
          <p className="poppins-regular">
            I&apos;m Nate Martinez,{" "}
            <strong className="teal-text">
              a UX designer with a web development and design background
            </strong>{" "}
            and{" "}
            <strong className="teal-text">
              {" "}
              5 years of design experience.
            </strong>{" "}
            I&apos;ve worked for several startups and small companies. I am
            currently a web developer for New Patient Group, an orthodontic
            consulting company.
          </p>
          <p className="poppins-regular">
            I&apos;ve worked in a variety of industries such as taxes, solar,
            car detailing, food products, and industrial wiring. Each audience
            came with its own different quirks that made them stand out.
            <strong className="red-text">
              {" "}
              I&apos;ve learned to adapt the design for multiple situations and
              uses.
            </strong>
          </p>
          <p className="poppins-regular">
            <strong className="gold-text">
              I enjoy being a UX designer because it helps people understand how
              they interact with technology.
            </strong>
            My family is not familiar with tech and making things more
            understandable just makes our relationship all the better. This is
            just my experience, I can&apos;t imagine how my work will help
            others in the future!
          </p>
          <ul className="skills-list poppins-regular">
            <li className="skills-list-item">UX Design</li>
            <li className="skills-list-item">ReactJS</li>
            <li className="skills-list-item">NodeJS</li>
            <li className="skills-list-item">Wordpress</li>
            <li className="skills-list-item">Javascript</li>
          </ul>
        </div>
        <div className="project-menu-container">
          <h2 className="project-menu-title poppins-bold">Projects:</h2>
          <ul className="project-menu poppins-regular">
            {Projects ? projectMenuItems : "Loading..."}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
