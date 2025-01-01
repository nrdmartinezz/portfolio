import Navbar from "../components/Navbar";
import Image from "../components/Image";

let TutorLink = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <section className="tutorlink-overview">
          <div className="width-75 flex-wrap align-center">
            <Image
              imgClass="project-logo"
              image="TutorLink_Simple_Icon_3x_ngvoqz"
              width="250"
              height="87"
            ></Image>
            <h1 className="poppins-regular tutorlink-title">TutorLink </h1>
            <p className="width-full poppins-regular project-description">
              TutorLink is a case study on tutor apps. TutorLink showcases
              tutors strengths and suggest strong tutor fits to parents
              searching. It also streamlines the booking process.
            </p>
          </div>
          <div className="width-25 align-center flex-col gap-row-12">
            <div className="poppins-regular project-roles-container flex-col">
              <h2>Project Role</h2>
              <span>UX/UI Designer</span>
              <h2>Technologies Used</h2>
              <ul className="unstyled-list">
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
            <div className="poppins-regular project-roles-container flex-col">
              <h2>Project Steps</h2>
              <ul className="unstyled-list">
                <li>Empathize</li>
                <li>Define</li>
                <li>Ideate</li>
                <li>Design</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorLink;
