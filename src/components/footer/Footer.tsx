import PartnershipData from "../../data";
import Slack from "../../assets/slackLogo.png";
import Alx from "../..//assets/Alx.png";
import Github from "../../assets/gthubogo.png";
import KPMG from "../../assets/kpmg.png";
import Holberton from "../../assets/Holberton.png";
import Workforce from "../../assets/Workforce.png";
import Hackerrank from "../../assets/Hackerrank.png";
import { NavLink } from "react-router-dom";

import { FooterContact } from "./Logos";

const Footer = () => {
  return (
    <>
      {/* Patnership */}
      <section className="my-[3rem] px-4">
        <p className="text-center text-3xl font-bold underline">Our Partners</p>
        <div className="mt-5 grid gap-7 grid-rows-[minmax(0,_1fr)] grid-flow-col overflow-x-scroll items-center">
          <>
            {PartnershipData.map((partner) => {
              return (
                <div key={partner.id}>
                  <NavLink to={partner.weburl} target="blank">
                    <div className="w-[100px] overflow-hidden">
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
      {/* FOOTER CONTACT CONTENT */}
      <FooterContact />
    </>
  );
};

export { Footer };
