// jshint esversion:6
import logoImage from "../../assets/New-clock-2.png";

function Logo() {
  return (
    <div className="flex gap-x-1 items-center">
      <a className="w-[30px] h-[30px] rounded-full" href="/">
        <img className="w-full h-full" src={logoImage} alt="logo_img" />
      </a>
      <h1 className="font-bold text-[black] py-[1px] border-b-2 border-b-[black]">
        3racker
      </h1>
    </div>
  );
}
export { Logo };
