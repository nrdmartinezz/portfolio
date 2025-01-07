import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Slideshow from "../components/Slideshow";

let paperwireframes = [
  "Home_v2_xull2w",
  "EditProfile_V3_iwalde",
  "View_Listings_v1_w2iteg",
  "ViewReviews_V2_xmdxaq",
];

let digitalwireframes = [
  "Profile_-_Wireframe_oqipk2",
  "Search_-_Wireframe_ojswry",
  "Bookings_Wireframe_tndigh",
  "FavoritesWireframe_hzek6e",
  "Account_Settings_-_Wireframe_k061nu",
  "Book_Session_-_Step_2_-_Wireframe_v4jowb",
];

let digitalMockups = [
  "View_Listings_-_Mockup_1_vbknim",
  "Search_-_Mockup_2_fxdlcy",
  "Home_-_Mockup_1_cvydrm",
  "Bookings_-_Mockup_2_nhshcu",
];

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
              TutorLink is a tutor recruiting application. Tutorlink makes it
              easy to find a tutor for you or your child!
            </p>
            <p className="width-full poppins-regular project-description">
              TutorLink was built with transparency in mind. The Goal was to
              make it wasy for parents to find a tutor with availability with
              their child. Inhrently, this makes it easier for anyone with
              busier schedules, such as college students.
            </p>
          </div>
          <div className="width-25 align-center flex-col gap-row-12">
            <div className="poppins-regular project-roles-container flex-col">
              <h2>Case Study Role</h2>
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
                <li>Understanding the User</li>
                <li>Starting the Design</li>
                <li>Going Forward</li>
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
              Step 1: Understanding The User
            </h2>
            <p className="poppins-regular empathize-description">
              As mentioned, The main users are parents and tutors. From this i
              began with creating user personas. The personas each had their own
              issues and goals with gave direction for the application. This
              helped create a unified journey for both personas.
            </p>
          </div>
        </section>
        <section className="empathize-overview flex-wrap">
          <h2 className="poppins-bold text-uppercase center-text width-full">
            User Personas
          </h2>
          <p className="poppins-regular center-text width-full section-description">
            The personas each have their own goals and pain points. This helps
            create useful insights, leading to even better functionality. Here
            we can begin to empathize with our users.
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
                    Find a tutor with a schedule that fits around her children’s
                    school and extracurricular activities.
                  </li>
                  <li>
                    Ensure the tutor is qualified and has positive reviews from
                    other parents.
                  </li>
                  <li>
                    Use a platform that simplifies searching, comparing, and
                    booking tutors without needing to spend too much time on
                    back-and-forth communication.
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
            <p className="poppins-regular center-text width-full section-description">
              Pain points cna be beneficial for learning what to avoid and what
              to look out for. This paved the way for deciding on a simple
              design.
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
        <section id="step-define" className="tutorlink-step-define text-white">
          <div className="flex-col align-center width-85 center-text margin-center">
            <h2 className="poppins-bold text-uppercase define-title">
              Step 2: Starting The Design
            </h2>
            <p className="poppins-regular define-description">
              Empathizing with Lisa and Sarah started the design process off on
              the right foot. Now we can begin ideation of screens and thinking
              about how we are going to organize information. This is where we
              can really innovate on designs and different layouts.
            </p>
          </div>
        </section>
        <section className="define-overview flex-wrap">
          <div className="flex-wrap">
            <div className="paper-wireframes-overview">
              <h2 className="poppins-bold text-uppercase width-full">
                Paper Wireframes
              </h2>
              <p className="poppins-regular width-full paper-wireframes-description">
                Crazy 8&apos;s was the best way to start the ideation phase. Starting
                with the home page, I created multiple variations until i landed
                on one I felt fit out use the best. After i repeated the same
                process for each screen. To make sure I created all the
                appropriate screens, I had also created a sitemap for the
                application.
              </p>
            </div>
            <Slideshow
              width={356}
              height={638}
              images={paperwireframes}
              slideshowClass={"paper-wireframes-slides"}
            ></Slideshow>
          </div>
        </section>
        <section>
          <div className="wireframe-images">
            <Image
              width="235"
              height="634"
              image="Bookings_V2_b1bgs7"
              imgClass={"wireframe-image"}
            ></Image>

            <Image
              width={236}
              height={525}
              imgClass={"wireframe-image"}
              image={"EditProfile_V4_nwea1i"}
            ></Image>
            <Image
              width={306}
              height={638}
              imgClass={"wireframe-image"}
              image={"PaymentMethods_V2_j8yooi"}
            ></Image>
          </div>
        </section>
        <section className="digital-wireframes-overview">
          <Slideshow
            width={430}
            height={932}
            images={digitalwireframes}
            slideshowClass={"digital-wireframes-slides"}
          ></Slideshow>
          <div className="digital-wireframes flex-col align-center">
            <h2 className="poppins-bold text-uppercase width-full">
              Digital Wireframes
            </h2>
            <p className="poppins-regular width-full digital-wireframes-description">
              After creating the paper wireframes, I began translating them into
              digital wireframes on Adobe XD. Here we can really begin to see
              the application come to life. This will give us more useful
              insights for how we&apos;ve layed out information on each screen.
            </p>
          </div>
        </section>
        <section className="digital-wireframes-image-col">
          <div className="digital-wireframe-images">
            <Image
              width="430"
              height="1171"
              image="Edit_Listings_-_Wireframe_2_o3lnhc"
              imgClass={"wireframe-image-custom"}
            ></Image>

            <Image
              width={"430"}
              height={"932"}
              imgClass={"wireframe-image-custom"}
              image={"Book_Session_-_Step_7_-_Wireframe_do8nma"}
            ></Image>
            <Image
              width={"430"}
              height={"932"}
              imgClass={"wireframe-image-custom"}
              image={"Book_Session_-_Step_1_-_Wireframe_xct9sq"}
            ></Image>
          </div>
        </section>
        <section className="stickersheet-section">
          <div className="stickersheet-overview flex-col width-55 align-center">
            <h2 className="poppins-bold text-uppercase width-full">
              Sticker Sheet
            </h2>
            <p className="poppins-regular width-full stickersheet-description">
              Creating a stickersheet creates consistency for all components
              that would be reused such as buttons and icons. This also
              streamlined the design of the pages. After creating the sitcker
              sheet i began making the mockups.
            </p>
          </div>
          <Image
            width={"2000"}
            height={"2000"}
            imgClass="stickersheet-img"
            image="Stickersheet_-_Mockup_vthfyn"
          ></Image>
        </section>
        <section className="digital-mockup-section">
          <Slideshow
            width={430}
            height={932}
            images={digitalMockups}
            slideshowClass={"digital-mockup-slides"}
          ></Slideshow>
          <div className="digital-mockup-overview width-55 flex-col align-center">
            <h2 className="poppins-bold text-uppercase width-full">
              Digital Mockups
            </h2>
            <p className="poppins-regular width-full digital-mockup-description">
              Creating the mockups was very enlightening. The main challenge was
              laying out a lot of information on small screens. I needed to
              choose what is the most important info to display first. From
              there I began to create the polished design.
            </p>
          </div>
        </section>
        <section>
          <div className="digital-mockup-images">
            <Image
              width="430"
              height="932"
              image="Book_Session_-_Step_7_-_Mockup_luwi7l"
              imgClass={"wireframe-image-custom"}
            ></Image>

            <Image
              width={"430"}
              height={"932"}
              imgClass={"wireframe-image-custom"}
              image={"Edit_Profile_-_Mockup_2_vlfz7p"}
            ></Image>
            <Image
              width={"430"}
              height={"932"}
              imgClass={"wireframe-image-custom"}
              image={"Account_Settings_-_Mockup_qhtrw5"}
            ></Image>
          </div>
        </section>
        <section className="tutorlink-summary">
          <div className="tutorlink-summary-overview">
            <h2 className="poppins-bold text-uppercase center-text width-full">
              Going Forward...
            </h2>
            <p className="poppins-regular center-text width-85">
              The design process for TutorLink was a great learning experience.
              I was able to empathize with the users and create a design that
              was simple and easy to use. The next steps would be to test the
              design with users and make any necessary changes. I am excited to
              see how the application will help parents and tutors find each
              other easily.
              <br />
              <br />
              From here I would begin to create a prototype and test it with a
              user groupn that matches the personas. This will help refine the
              design more and create an even better experience.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorLink;
