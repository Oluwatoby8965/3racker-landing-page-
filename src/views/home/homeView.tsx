// jshint esversio:6
import newClock from "../../assets/New-clock.png";
import AppleStoreImage from "../../assets/Apple_store.png";
import GoogleStoreImage from "../../assets/Google_store.png";
import MockupDetailsImage from "../../assets/mockup_details.png";
import MOckupLoginImage from "../../assets/mockup_login.png";
import OfficeImage2 from "../../assets/Office_image_2.png";
import { GoogleSVG, EmailSVG } from "../../components/svg";

function HomeView() {
    return (
        <>
            <div className="h-full w-full mt-[80px]">

                <header className="py-[2rem] flex justify-center">
                    <div className="relative w-max flex flex-col items-center gap-y-[3rem]">
                        <div className="flex flex-col items-center gap-y-3">
                            <h1 className="text-4xl text-center w-max py-2 border-b-2 border-black">3racker</h1>
                            <p className="w-[12ch] text-3xl text-center">Explore Time Management</p>
                        </div>
                        <div className="w-[200px] h-[200px]">
                            <img className="w-full h-full" src={newClock} alt="image of a clock" />
                        </div>
                        <div className="justify-self-center flex justify-center gap-x-2">
                            <div className="h-[50px] w-[150px]">
                                <img className="w-full h-full" src={GoogleStoreImage} alt="" />
                            </div>
                            <div className="h-[50px] w-[150px]">
                                <img className="w-full h-full" src={AppleStoreImage} alt="" />
                            </div>
                        </div>
                        <img className="hidden md:block absolute w-max right-[-65%] top-[25%] bottom-0" src={MOckupLoginImage} alt="img" />
                        <img className="hidden md:block absolute w-max right-[-90%] inset-y-[3rem]" src={MockupDetailsImage} alt="img" />
                    </div>
                    <div className="hidden md:block w-[300px]"></div>
                </header>

                <section className="relative w-full h-[400px] bg-[url('../src/assets/Office_people_large.png')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-[#00000094] p-[2rem] md:px-[4rem] md:py-[3rem]">
                        <div className="h-full flex flex-col justify-between items-start">
                            <h1 className="text-4xl text-white  font-bold capitalize">Maximize your <br /> office <span className="text-[#3838f0]">Productivity</span></h1>
                            <div className="flex flex-col gap-3 sm:flex-row sm:gap-9">
                                <button className="rounded bg-blue-500 py-3 px-5 flex items-center gap-x-2 text-white"><span><EmailSVG size={20} /></span>Sign up with Email</button>
                                <button className="rounded bg-red-600 py-3 px-5 flex items-center gap-x-2 text-white"><span><GoogleSVG size={20} /></span>Google Sign Up</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="w-max mx-auto grid grid-cols-[minmax(0,_400px),_max-content]  py-[3rem] px-[1rem] justify-items-center">
                        <div className="flex flex-col gap-y-8">
                            <h2 className="text-3xl text-[#4A154A]">Explore Our Advanced <br /> Office AI Tools </h2>
                            <p className="text-lg">Track and increase productivity in an around your office with our advanced tracking tools in just simple steps.</p>
                        </div>
                        <div className="box-content w-[250px] h-[250px] px-[2rem] justify-self-end border-2 border-blue-700">
                            <img className="w-full h-full" src={OfficeImage2} alt="office image" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export { HomeView };