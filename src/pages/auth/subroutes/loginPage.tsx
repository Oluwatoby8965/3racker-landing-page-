// jshint esversion:6

import { LoginView } from "../../../views/auth";

function LoginPage() {
    return (
        <>
        <div className="h-screen w-full pt-[5rem] grid grid-cols-1 md:grid-cols-2">
            <LoginView />       
            {/* <p>Testing Something</p> */}
        </div>
        </>
    )
}

export { LoginPage };