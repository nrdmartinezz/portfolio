import {useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){

  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([]);

  return <div className="app-container">
    <Navbar></Navbar>
    <div className="app-content">
      
      <div className="title-container">
        <h1 className="title comfortaa-regular">Nathanael <br/>Martinez</h1>
        <p className="poppins-regular">I design unique user experiences with purpose and a strong attention to detail.</p>  
      </div>

      <div className="project-menu-container">
        <ul className="project-menu">
          <li className="project-menu-item"><a href="/project1">Project Name</a></li>
          <li className="project-menu-item"><a href="/project2">Project Name</a></li>
          <li className="project-menu-item"><a href="/project3">Project Name</a></li>
          <li className="project-menu-item"><a href="/project4">Project Name</a></li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>;
}
export default App;