import Navbar from "../components/Navbar";
import Image from "../components/Image";

let TutorLink = () => {
  return (
    <>
      <Navbar />
      <div className="app-container project-container">
        <section>
          <div className="flex-col width-75 full-vh">
            <Image imgClass="project-logo" image="TutorLink_Simple_Icon_3x_ngvoqz" width="250" height="97"></Image>
            <h1 className="poppins-regular project-title">TutorLink </h1>
            <p className="poppins-regular project-description">
              TutorLink is a case study on tutor apps. TutorLink showcases
              tutors strengths and suggest strong tutor fits to parents
              searching. It also streamlines the booking process.
            </p>
          </div>
          <Image width="500" height="500"image={"TutorLink_Case_Study_nkasm6"}></Image>
        </section>
      </div>
    </>
  );
};

export default TutorLink;
