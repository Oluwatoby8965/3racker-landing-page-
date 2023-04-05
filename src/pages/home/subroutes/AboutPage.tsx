// jshint esversion:6
import Newclock from "../../../assets/New-clock.png";
import suit from "../../../assets/suit.jpeg";
import whitecloth from "../../../assets/whitecloth.jpeg";
import { Footer } from "../../../components";

function AboutPage() {
  return (
    <>
      <section className="my-[80px]">
        {/* first container for the clock view  */}
        <section
          className="flex justify-center items-center
                flex-col md:flex-row lg:w-[60%] w-[80%] mx-auto pt-[20px] xl:gap-8"
        >
          <div className="flex flex-col gap-5 ">
            <h1 className="text-[70px] md:text-[90px] underlines relative">
              3racker
            </h1>
            <div className="w-[200px] h-[200px]">
              <img className="w-full h-full " src={Newclock} alt={Newclock} />
            </div>
          </div>
          <div
            className="bg-[#eeecec] md:w-[45%] sm:w-[80%] flex items-center
           rounded-lg p-[10px] Myshadow Myshadoweffect xl:h-[200px] xl:w-[35%] mt-[30px] md:mt-0"
          >
            <p>
              Tracker marks a fine line between the privacy and productivity of
              the employees, as we believe in progress with an application of
              intelligence and technology to improve business, productivity, and
              work culture.
            </p>
          </div>
        </section>

        <section
          className="flex justify-center items-center
                flex-col lg:flex-row lg:w-[70%] lg:mt-28 w-[90%] mx-auto mt-[50px] gap-4 
                lg:gap-10 mb-[80px]"
        >
          <div>
            <h3 className="text-[2rem] font-semibold text-[#656565] text-center mb-1">
              Who are we?
            </h3>

            <p className="Myshadows Myshadoweffect bg-[#eeecec] px-4 py-3 rounded-xl">
              Tracker or otherwise known as 3racker was founded by two
              innovators Oluwatobi Amoniyan and Lebi Oluwasoji with the aim of
              providing solution to employee time management and efficiency.
              With the constant distractions that employees face on a daily via
              the web, our tool Tracker was introduced to help monitor employees
              time and activities inn the office to help them stay efficient.
            </p>
          </div>
          <div>
            <h3 className="text-[2rem] font-semibold text-[#656565] text-center mb-1">
              What we do?
            </h3>

            <p className="Myshadows Myshadoweffect bg-[#eeecec] px-4 py-3 rounded-xl">
              Efficiency is the key to success. If there is a better way of
              approaching a challenge or a quicker, smarter way of working,
              we’re all in. Tracker is committed to offering employee monitoring
              solutions that fit your company. It’s a way out we share with our
              customers who lead teams, grow businesses, and make their
              employees work more productively.
            </p>
          </div>
        </section>
        {/* THID SECTION. WHO WE ARE */}
        <section
          className="flex justify-center items-center flex-col
             lg:w-[70%] w-[80%] mx-auto pt-[20px] xl:gap-8"
        >
          <div className=" relative">
            <p className="text-[2rem] font-bold text-[#656565] underlines pb-2 capitalize">
              Meet our Team
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[80px]">
            <div
              className="flex flex-col justify-center items-center gap-3 bg-[#eeecec]
            Myshadows Myshadoweffect rounded-xl"
            >
              <div
                className="w-[120px] h-[120px] rounded-full overflow-hidden border-[1px] 
              border-[purple] mt-7 "
              >
                <img
                  className="h-full w-full"
                  src={whitecloth}
                  alt="Oluwatobi"
                />
              </div>
              <p className=" px-4 py-3 ">
                Oluwatobi Amoniyan is a graduate of the University of Lagos,
                where he studied English Language. He is a web designer and
                software engineer. Oluwatobi’s mission is to ensure cusomer’’s
                satisfaction at all times.
              </p>
            </div>
            <div
              className="flex flex-col justify-center items-center gap-3 bg-[#eeecec]
            Myshadows Myshadoweffect rounded-xl"
            >
              <div
                className="w-[120px] h-[120px] rounded-full overflow-hidden border-[1px] 
              border-[purple] mt-7"
              >
                <img className="w-full h-full" src={suit} alt="WHiteCloth" />
              </div>
              <p className=" px-4 py-3">
                Lebi Soji is a software engineer determined to solve identify
                complex problem and proffer solutions to tackle these problems.
                He smart and goal driven and a co-founder of Tracker
              </p>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export { AboutPage };
