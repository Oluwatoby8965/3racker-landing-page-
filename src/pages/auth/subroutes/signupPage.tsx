// jshint esversion:6
import newClock from "../../../assets/New-clock.png"
import { SignUpView } from "../../../views/auth";

function SignUpPage() {
    return (
        <>
            <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="hidden md:flex flex-col">
                    <div className="flex flex-col items-center gap-y-[3rem]">
                        <h1 className="text-4xl text-center w-max py-2 border-b-2 border-black">3racker</h1>
                        <div className="w-[200px] h-[200px]">
                            <img className="w-full h-full" src={newClock} alt="image of a clock" />
                        </div>
                    </div>
                </div>
                <SignUpView />
            </div>
        </>
    );
}

export { SignUpPage };