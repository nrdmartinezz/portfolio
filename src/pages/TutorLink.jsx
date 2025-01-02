import Navbar from "../components/Navbar";
import Image from "../components/Image";

let TutorLink = () => {
  return (
    <>
      <Navbar />
      <div className="tutorlink-project-container">
        <section className="tutorlink-overview">
          <div className="flex-col width-55 align-center">
            <Image
              imgClass="project-logo"
              image="TutorLink_Simple_Icon_3x_ngvoqz"
              width="250"
              height="87"
            ></Image>
            <h1 className="poppins-regular tutorlink-title">TutorLink</h1>
            <p className="width-full poppins-regular project-description">
              TutorLink is a case study on tutor apps. TutorLink showcases
              tutors strengths and suggest strong tutor fits to parents
              searching. It also streamlines the booking process. The app is
              designed to be user-friendly and easy to navigate.
            </p>
          </div>
          <div className="width-25 align-center flex-col gap-row-12">
            <div className="poppins-regular project-roles-container flex-col">
              <h2>Project Role</h2>
              <ul className="unstyled-list">
                <li>UX/UI Designer</li>
              </ul>

              <h2>Technologies Used</h2>
              <ul className="unstyled-list">
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
            <div className="poppins-regular project-roles-container flex-col">
              <h2>Project Steps</h2>
              <ul className="unstyled-list">
                <li>User Research</li>
                <li>Paper Wireframes</li>
                <li>Digital Mockup</li>
                <li>Summary</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="step-empathize"
          className="tutorlink-step-empathize text-white"
        >
          <div className="flex-col align-center width-85 center-text margin-center">
            <h2 className="poppins-bold text-uppercase empathize-title">
              Step 1: User Research
            </h2>
            <p className="poppins-regular empathize-description">
              I started the project by researching the tutoring industry. I
              wanted to understand the needs of both tutors and parents. I
              looked into different tutoring applications online and began
              researching their reviews. From there, I created two user personas
              to help guide the design process. This helped reveal more areas
              for improvment and features that would be beneficial to the user.
            </p>
          </div>
        </section>
        <section className="empathize-overview flex-wrap">
          <h2 className="poppins-bold text-uppercase center-text width-full">
            User Personas
          </h2>
          <p className="poppins-regular center-text width-full">
            I created two user personas to represent the needs and goals of both
            users. This helped create some insight on what exactly they are
            looking for.
          </p>
          <div className="personas-container">
            <div className="persona-card width-45">
              <Image
                imgClass={"tutor-persona-image"}
                width={200}
                height={201}
                image="parent-persona-stock-image_s85kgq"
              ></Image>
              <div className="flex-wrap align-center persona-description">
                <h3 className="width-full poppins-bold persona-name">
                  Lisa Jenkins
                </h3>
                <p className="poppins-regular width-full">
                  <b>Age:</b> 38
                  <br />
                  <b>Occupation: </b>Marketing Manager
                  <br />
                  <b>Family:</b> Married with two children (10-year-old
                  daughter, 14-year-old son) <br />
                </p>
              </div>

              <div className="width-full flex-col align-center persona-goals">
                <h3 className="poppins-bold persona-goals-title">Goals</h3>
                <ul className="poppins-regular unstyled-list persona-goals">
                  <li>
                    Attract more students by showcasing her services and
                    qualifications effectively.
                  </li>
                  <li>
                    Display reviews and feedback from previous students to build
                    trust with potential clients.
                  </li>
                  <li>
                    Use a platform that allows her to manage bookings, payments,
                    and availability easily.
                  </li>
                </ul>
              </div>
            </div>
            <div className="persona-card width-45">
              <Image
                imgClass={"tutor-persona-image"}
                width={200}
                height={201}
                image="tutor-persona-stock-image_zplxd1"
              ></Image>
              <div className="flex-wrap align-center persona-description">
                <h3 className="width-full poppins-bold persona-name">
                  Sarah Miller
                </h3>
                <p className="poppins-regular width-full">
                  <b>Age:</b> 29 <br />
                  <b>Education: </b>Master’s degree in Mathematics
                  <br />
                  <b>Experience:</b> 5 years of experience tutoring high school
                  students in math <br />
                </p>
              </div>

              <div className="width-full flex-col align-center persona-goals">
                <h3 className="poppins-bold persona-goals-title">Goals</h3>
                <ul className="poppins-regular unstyled-list persona-goals">
                  <li>
                    Attract more students by showcasing her services and
                    qualifications effectively.
                  </li>
                  <li>
                    Display reviews and feedback from previous students to build
                    trust with potential clients.
                  </li>
                  <li>
                    Use a platform that allows her to manage bookings, payments,
                    and availability easily.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pain-points-container width-full">
            <h2 className="poppins-bold text-uppercase center-text width-full">
              Pain Points
            </h2>
            <p className="poppins-regular center-text width-full">
              I identified the pain points of both users to better understand
              their needs and goals. This helped me create features that would
              address these issues.
            </p>
            <div className="pain-points flex-row">
              <div className="pain-point width-45 flex-col align-center">
                <h3 className="poppins-bold">Lisa Jenkins</h3>
                <h4 className="poppins-bold">Problem Statement</h4>
                <p className="poppins-regular width-full">
                  As a busy parent with a packed schedule, I want to find a
                  qualified tutor with availability that matches my
                  family&apos;s routine and book sessions easily so that I can
                  support my children&apos;s academic growth without spending
                  excessive time coordinating schedules.
                </p>
                <h4 className="poppins-bold">Frustrations</h4>
                <ul className="poppins-regular unstyled-list">
                  <li>
                    Difficulty finding tutors with availability that matches her
                    busy schedule.
                  </li>
                  <li>
                    Overwhelmed by too many tutor listings without clear
                    qualifications or reviews.
                  </li>
                  <li>
                    Frustration with having to email or call multiple tutors to
                    check schedules and prices.
                  </li>
                </ul>
              </div>
              <div className="pain-point width-45 flex-col align-center">
                <h3 className="poppins-bold">Sarah Miller</h3>
                <h4 className="poppins-bold">Problem Statement</h4>
                <p className="poppins-regular width-full">
                  As a freelance tutor looking to grow my client base, I want to
                  create a detailed list of my services, showcase positive
                  reviews, and manage bookings so that I can attract more
                  students, build my reputation, and handle scheduling and
                  payments efficiently.
                </p>
                <h4 className="poppins-bold">Frustrations</h4>
                <ul className="poppins-regular unstyled-list">
                  <li>
                    Managing multiple listings and schedules on different
                    platforms is time-consuming
                  </li>
                  <li>
                    Difficulty showcasing her qualifications and positive
                    reviews in a way that stands out.
                  </li>
                  <li>
                    Dealing with inconsistent payments and last-minute
                    cancellations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorLink;
