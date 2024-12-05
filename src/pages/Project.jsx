import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

let Project = () => {
  const location = useLocation();
  const { project } = location.state;

  return (
    <>
      <Navbar />
      <div className="app-container">
        {/* {!!project.image ? (
          <div className="image-container">
            <img src={project.image} alt={project.title}></img>
          </div>
        ) : null} */}
        <div className="content-right content-container">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
