// jshint esversio:6
import newClock from "../../assets/New-clock.png";
import AppleStoreImage from "../../assets/Apple_store.png";
import GoogleStoreImage from "../../assets/Google_store.png";
import MockupDetailsImage from "../../assets/mockup_details.png";
import MOckupLoginImage from "../../assets/mockup_login.png";
import OfficeImage3 from "../../assets/Office_image_3.jpg";
import AiImage from "../../assets/Ai_image.jpg";
import { GoogleSVG, EmailSVG } from "../../components/svg";
import { NavLink } from "react-router-dom";

import { HiMail } from "react-icons/hi";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

import PartnershipData from "../../data";

function HomeView() {
  return (
    <>
      <div className="h-full w-full mt-[80px]">
        {/* Hero Section */}
        <header className="py-[2rem] flex justify-center">
          <div className="relative w-max flex flex-col items-center gap-y-[3rem]">
            <div className="flex flex-col items-center gap-y-3">
              <h1 className="text-4xl text-center w-max py-2 border-b-2 border-black">
                3racker
              </h1>
              <p className="w-[12ch] text-3xl text-center">
                Explore Time Management
              </p>
            </div>
            <div className="w-[200px] h-[200px]">
              <img
                className="w-full h-full"
                src={newClock}
                alt="image of a clock"
              />
            </div>
            <div className="justify-self-center flex justify-center gap-x-2">
              <div className="h-[50px] w-[150px]">
                <img className="w-full h-full" src={GoogleStoreImage} alt="" />
              </div>
              <div className="h-[50px] w-[150px]">
                <img className="w-full h-full" src={AppleStoreImage} alt="" />
              </div>
            </div>
            <img
              className="hidden md:block absolute w-max right-[-65%] top-[25%] bottom-0"
              src={MOckupLoginImage}
              alt="img"
            />
            <img
              className="hidden md:block absolute w-max right-[-90%] inset-y-[3rem]"
              src={MockupDetailsImage}
              alt="img"
            />
          </div>
          <div className="hidden md:block w-[300px]"></div>
        </header>

        {/* Call To Action - Sign Up Section */}
        <section className="relative w-full h-[400px] bg-[url('../src/assets/Office_people_large.png')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 bg-[#00000094] p-[2rem] md:px-[4rem] md:py-[3rem]">
            <div className="h-full flex flex-col justify-between items-start">
              <h1 className="text-4xl text-white  font-bold capitalize">
                Maximize your <br /> office{" "}
                <span className="text-[#3838f0]">Productivity</span>
              </h1>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-9">
                <button className="rounded bg-blue-500 py-3 px-5 flex items-center gap-x-2 text-white">
                  <span>
                    <EmailSVG size={20} />
                  </span>
                  Sign up with Email
                </button>
                <button className="rounded bg-red-600 py-3 px-5 flex items-center gap-x-2 text-white">
                  <span>
                    <GoogleSVG size={20} />
                  </span>
                  Google Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature section */}
        <section className="relative shadow h-[400px] bg-[url('../src/assets/Ai_image.jpg')] bg-no-repeat bg-right bg-cover sm:bg-none">
          <div className="sm:static absolute inset-0 py-[3rem] px-[2rem] bg-gradient-to-l	 from-[#000000] sm:bg-none text-white sm:text-[black]">
            <div className="sm:flex sm:justify-center sm:items-start gap-x-4 md:gap-x-[3rem]">
              <div className="flex flex-col gap-y-7 w-[400px] sm:w-[350px] md:w-[400px] lg:w-[450px]">
                <h1 className="text-3xl font-bold leading-[1.3]">
                  Explore Our Advanced Office AI Tools
                </h1>
                <p className="text-lg">
                  Track and increase productivity in an around your office with
                  our advanced tracking tools in just simple steps.
                </p>
              </div>
              <div className="hidden sm:block box-content w-[300px] h-[300px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src={AiImage}
                  alt="office image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="relative shadow h-[400px] bg-[url('../src/assets/office_image_3.jpg')] bg-no-repeat bg-right bg-cover sm:bg-none">
          <div className="sm:static absolute inset-0 py-[3rem] px-[2rem] bg-gradient-to-r	 from-[#000000] sm:bg-[black] text-white">
            <div className="sm:flex sm:justify-center sm:items-start gap-x-4 md:gap-x-[3.5rem]">
              <div className="hidden sm:block box-content w-[300px] h-[300px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src={OfficeImage3}
                  alt="office image"
                />
              </div>
              <div className="flex flex-col gap-y-7 w-[400px] sm:w-[350px] md:w-[400px] lg:w-[450px]">
                <h1 className="text-3xl font-bold leading-[1.3]">
                  See The Endless Possibilities of Time
                </h1>
                <p className="text-lg">
                  Imagine a world in which you can control time and use it
                  efficiently
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patnership */}
        <section className="py-[3rem] px-4 overflow-scroll">
          <div className="text-center text-3xl font-bold">Our Partners</div>
          <div className="mt-5 grid gap-7 grid-rows-[minmax(0,_1fr)] grid-flow-col overflow-scroll items-center">
            <>
              {PartnershipData.map((partner) => {
                return (
                  <div key={partner.id}>
                    <NavLink to={partner.weburl} target="blank">
                      <div className="w-[100px]">
                        <img
                          className="w-full h-fulll"
                          src={partner.img}
                          alt="img"
                        />
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[black] text-white py-[3rem]">
          {/* First footer section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 justify-items-center">
            <div className="flex gap-x-5 items-center">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl font-bold">Oluwatobi Amoniyan</h3>
                <div className="flex gap-x-2 items-center">
                  <span>
                    <HiMail />
                  </span>
                  <a href="mailto:amoniyano1@gmail.com">amoniyano1@gmail.com</a>
                </div>
              </div>
              <div className="text-sm flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center">
                  <span>
                    <BsFillTelephonePlusFill size={16} />
                  </span>
                  <span>
                    <a href="tel:+2349036973816">+2349036973816</a>
                  </span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <span>
                    <HiLocationMarker size={22} />
                  </span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Second footer section */}
            <div className="flex gap-x-5 items-center">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl font-bold">Oluwasoji Lebi</h3>
                <div className="flex gap-x-3 items-center">
                  <span>
                    <HiMail />
                  </span>
                  <a href="mailto:lebioluwasoji@gmail.com">
                    lebioluwasoji@gmail.com
                  </a>
                </div>
              </div>
              <div className="text-sm flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center">
                  <span>
                    <BsFillTelephonePlusFill size={16} />
                  </span>
                  <span>
                    <a href="tel:+2348032733065">+2348032733065</a>
                  </span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <span>
                    <HiLocationMarker size={22} />
                  </span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export { HomeView };
