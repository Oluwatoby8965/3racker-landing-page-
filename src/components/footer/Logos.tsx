import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";

export function FooterContact() {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:w-[60%] mx-auto lg:mt-20">
      <div
        className="relative  mb-4 pb-4 flex flex-col
       justify-center mx-auto"
      >
        <ul className="Before">
          <li className="flex items-center gap-6 mb-4 cursor-pointer">
            <BsPersonFill size={25} />
            <p className="hover:underline Myshadoweffec">Oluwatobi Amoniyan</p>
          </li>
          <a className="flex items-center gap-6 mb-6" href="tel:+2349036973816">
            <HiPhone size={25} />
            <p className="hover:underline Myshadoweffec">+2349036973816</p>
          </a>
          <a
            className="flex items-center gap-6 mb-6 "
            href="mailto:amoniyano1@gmail.com"
          >
            <HiOutlineMail size={25} />
            <a className="hover:underline Myshadoweffec">
              amoniyano1@gmail.com
            </a>
          </a>
          <li className="flex items-center gap-6 mb-6 cursor-pointer">
            <HiLocationMarker size={25} />
            <p className="hover:underline Myshadoweffec">Lagos, Nigeria</p>
          </li>
        </ul>
      </div>
      <div className="relative mb-4 pb-4 flex flex-col mx-auto">
        <ul className=" Before">
          <li className="flex items-center gap-6 mb-6 cursor-pointer">
            <BsPersonFill size={25} />
            <p className="hover:underline Myshadoweffec">Oluwasoji Lebi</p>
          </li>
          <a className="flex items-center gap-6 mb-6" href="tel:+2348032733065">
            <HiPhone size={25} />
            <p className="hover:underline Myshadoweffec">+2348032733065</p>
          </a>
          <a
            className="flex items-center gap-6 mb-6"
            href="mailto:lebioluwasoji@gmail.com"
          >
            <HiOutlineMail size={25} />
            <p className="hover:underline Myshadoweffec">
              lebioluwasoji@gmail.com
            </p>
          </a>
          <li className="flex items-center gap-6 mb-6 cursor-pointer">
            <HiLocationMarker size={25} />
            <p className="hover:underline Myshadoweffec">Lagos, Nigeria</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
