import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Image from "../components/Image";

let Project = () => {
  const location = useLocation();
  const { project } = location.state;

  return (
    <>
      <Navbar />
      <div className="app-container project-container">
        {project.image ? (
          <div className="project-image-container">
            <Image
              width={506}
              height={450}
              image={project.image}
              alt={project.title}
            ></Image>
          </div>
        ) : null}
        <div className="content-right project-content-container">
          <Image className="project-logo" alt={project.image} width={300} height={100} image={project.logo}></Image>
          <h1 style={{ fontSize: 48 }} className="poppins-bold">
            {project.title}
          </h1>
          <p style={{}} className="poppins-regular">
            {project.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
