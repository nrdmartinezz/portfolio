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
      <li className="project-menu-item" key={project.title + "_" + i}>
        <Link to={"/project/"+project.title} state={{ project: project }}>
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
          <div className="">
            <Image imgClass={"profile-image"} width={325} height={200} image={"ProfileImage2023_jlyyjl"}></Image>
            <h1 className="title arboria-bold">
              <div className="accent-text">
              Hi! I&apos;m<br />
              </div>
              Nate Martinez
            </h1>
          </div>
          <p className="poppins-regular">
            I am a UX Designer & Web Developer,  known for my honesty empathy and loyalty. I brings in unique direction while maintaining focus on the user and their needs.

          </p>
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
