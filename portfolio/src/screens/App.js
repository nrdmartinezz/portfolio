import "../styles/App.css";
import Bullet from "../components/Bullet";

const App = () => {
  return (
    <div className="app-body">
      <div className="app-content">
        {/* <div className="pill-header"> <p> Lorem Ipsum</p></div> */}
        <h1 className="introduction">Lorem Ipsum Dolor Sit Amet</h1>
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
