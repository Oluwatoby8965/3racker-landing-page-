import PartnershipData from "../../data";
import { NavLink } from "react-router-dom";

import { FooterContact } from "./Logos";

const Footer = () => {
  return (
    <>
      {/* Patnership */}
      <section className="mt-[7rem] px-4 ">
        <p className="text-center text-3xl font-bold underline">Our Partners</p>
        <div
          className="mt-7 grid gap-7 grid-rows-[minmax(0,_1fr)] grid-flow-col 
        overflow-x-scroll items-center HideScrollBar pb-6"
        >
          <>
            {PartnershipData.map((partner) => {
              return (
                <div key={partner.id}>
                  <NavLink to={partner.weburl} target="blank">
                    <div className="w-[100px] overflow-hidden Myshadoweffec">
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
