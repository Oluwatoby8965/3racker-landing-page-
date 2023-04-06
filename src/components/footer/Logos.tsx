import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";

export function FooterContact() {
  return (
    <>
      <footer className="bg-[black] text-white py-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 justify-items-center">
          <div className="flex gap-x-5 items-center">
            <div className="flex flex-col gap-y-2">
              <li className="flex items-center gap-6 mb-4 cursor-pointer">
                <BsPersonFill size={25} />
                <p className="hover:underline Myshadoweffec">
                  Oluwatobi Amoniyan
                </p>
              </li>
              <a
                className="flex items-center gap-6 mb-6 "
                href="mailto:amoniyano1@gmail.com"
              >
                <HiOutlineMail size={25} />
                <p className="hover:underline Myshadoweffec">
                  amoniyano1@gmail.com
                </p>
              </a>
            </div>
            <div className="text-sm flex flex-col gap-y-2">
              <a
                className="flex items-center gap-6 mb-6"
                href="tel:+2349036973816"
              >
                <HiPhone size={25} />
                <p className="hover:underline Myshadoweffec">+2349036973816</p>
              </a>
              <li className="flex items-center gap-6 mb-6 cursor-pointer">
                <HiLocationMarker size={25} />
                <p className="hover:underline Myshadoweffec">Lagos, Nigeria</p>
              </li>
            </div>
          </div>

          {/* Second footer section */}
          <div className="flex gap-x-5 items-center">
            <div className="flex flex-col gap-y-2">
              <li className="flex items-center gap-6 mb-6 cursor-pointer">
                <BsPersonFill size={25} />
                <p className="hover:underline Myshadoweffec">Oluwasoji Lebi</p>
              </li>
              <a
                className="flex items-center gap-6 mb-6"
                href="mailto:lebioluwasoji@gmail.com"
              >
                <HiOutlineMail size={25} />
                <p className="hover:underline Myshadoweffec">
                  lebioluwasoji@gmail.com
                </p>
              </a>
            </div>
            <div className="text-sm flex flex-col gap-y-2">
              <a
                className="flex items-center gap-6 mb-6"
                href="tel:+2348032733065"
              >
                <HiPhone size={25} />
                <p className="hover:underline Myshadoweffec">+2348032733065</p>
              </a>
              <li className="flex items-center gap-6 mb-6 cursor-pointer">
                <HiLocationMarker size={25} />
                <p className="hover:underline Myshadoweffec">Lagos, Nigeria</p>
              </li>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="flex flex-col lg:flex-row mt-10 lg:w-[60%] mx-auto lg:mt-20">
        <div
          className="relative  mb-4 pb-4 flex flex-col
       justify-center mx-auto"
        >
          <ul className="Before">
            <li className="flex items-center gap-6 mb-4 cursor-pointer">
              <BsPersonFill size={25} />
              <p className="hover:underline Myshadoweffec">
                Oluwatobi Amoniyan
              </p>
            </li>
            <a
              className="flex items-center gap-6 mb-6"
              href="tel:+2349036973816"
            >
              <HiPhone size={25} />
              <p className="hover:underline Myshadoweffec">+2349036973816</p>
            </a>
            <a
              className="flex items-center gap-6 mb-6 "
              href="mailto:amoniyano1@gmail.com"
            >
              <HiOutlineMail size={25} />
              <p className="hover:underline Myshadoweffec">
                amoniyano1@gmail.com
              </p>
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
            <a
              className="flex items-center gap-6 mb-6"
              href="tel:+2348032733065"
            >
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
      </div> */}
    </>
  );
}
