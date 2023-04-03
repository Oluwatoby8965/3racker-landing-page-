// jshint esversion:6
import { useRef } from "react";
import { KeySVG, EmailSVG } from "../../components/svg";

function LoginView() {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    function handleFormSubmit(e: any) {
        e.preventDefault();
        const userEmail = emailInputRef.current?.value;
        const userPassword = passwordInputRef.current?.value;
    }

    return (
        <>
            <div className="h-max w-full max-w-[380px] mx-auto bg-white">
                <h1 className="text-3xl text-center my-7">3racker</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-y-3">
                        <div className="relative w-full max-w-[400px] h-[48px]">
                            <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><span className="text-[grey]"><EmailSVG size={28} /></span></div>
                            <input className="w-full h-full rounded-sm outline-none pl-[50px] text-black border-[1px] border-[#555353] shadow-sm focus:border-pry focus:border-2" type="text" placeholder="Email" ref={emailInputRef} required />
                        </div>
                        <div className="relative w-full max-w-[400px] h-[48px]">
                            <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-gray-600"><span className="text-[grey]"><KeySVG size={28} /></span></div>
                            <input className="w-full h-full rounded-sm outline-none pl-[50px] border-[1px] border-[#555353] shadow-sm focus:border-pry focus:border-2" type="password" placeholder="Password" ref={passwordInputRef} required />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full max-w-[400px] capitalize font-bold text-center px-2 py-3 bg-[#242323] text-white rounded">Sign In</button>
                        <p className="mt-1 text-sm font-mono text-[grey]">Do not have an account?</p>
                    </div>
                    <div className="mt-7">
                        <button className="w-full max-w-[400px] capitalize font-bold text-center px-2 py-3 bg-[#4285F4] text-white rounded">Google Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export { LoginView };
