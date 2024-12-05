import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

let Home = () => {
  let [ActiveProject, setActiveProject] = useState({});
  let [Projects, setProjects] = useState([]);
  let [isModalOpen, setModalOpen] = useState(false);

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
        <Link
          to={"/project"}
          state={{project:project}}
        >
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
          <h1 className="title comfortaa-regular">
            Nathanael <br />
            Martinez
          </h1>
          <p className="poppins-regular">
            I design unique user experiences with purpose and a strong attention
            to detail.
          </p>
        </div>
        <div className="project-menu-container">
          <ul className="project-menu">
            {Projects ? projectMenuItems : "Loading..."}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
