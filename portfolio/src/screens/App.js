import "../styles/App.css";
import Bullet from "../components/Bullet";

const App = () => {
  return (
    <div className="app-body">
      <div className="app-content">
        <div className="pill-container">
          <span className="pill-header web-dev">
            <p className="pill-text">Web Developer - 3 years</p>
          </span>
          <span className="pill-header graphic-designer">
            <p className="pill-text">Graphic Designer - 3 years</p>
          </span>
          <span className="pill-header ui-ux">
            <p className="pill-text">UI/UX - 1 year</p>
          </span>
        </div>
        <h1 className="introduction">Hi! I am Nate Martinez</h1>
        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          purus commodo.
        </p>
        <div className="bullet-row">
          <Bullet text="Lorem Ipsum dolor" />
          <Bullet text="Lorem Ipsum dolor" />
        </div>
        <div className="bullet-row">
          <Bullet text="Lorem Ipsum dolor" />
          <Bullet text="Lorem Ipsum dolor" />
        </div>
      </div>
      <div className="portfolio-image"></div>
    </div>
  );
};

export default App;
