import Slack from "../../assets/slackLogo.png";
import Alx from "../..//assets/Alx.png";
import Github from "../../assets/gthubogo.png";
import KPMG from "../../assets/kpmg.png";
import Holberton from "../../assets/Holberton.png";
import Workforce from "../../assets/Workforce.png";
import Hackerrank from "../../assets/Hackerrank.png";

import { FooterContact } from "./Logos";

const Footer = () => {
  return (
    <div className="mt-14">
      <h1 className="text-[2rem] text-[#1a1a1a] underline font-semibold text-center">
        Partners
      </h1>
      <div className="bg-[rgba(92,68,68,0.2)] ">
        <div
          className=" absolut h-[150px] flex justify-center  items-center gap-16
           overflow-hidden"
        >
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a
              href="https://alxgroup.com.au/the-10-best-apps-for-small-businesses-in-2018/slack/"
              target="blank"
            >
              <img src={Slack} alt="slack" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://kpmg.com/ng/en/home.html" target="blank">
              <img src={KPMG} alt="kmg" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://workforcegroup.com/" target="blank">
              <img src={Workforce} alt="workforce" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://www.alxafrica.com/">
              <img src={Alx} alt="alx" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://github.com/" target="blank">
              <img src={Github} alt="github" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://www.holbertonschool.com/" target="blank">
              <img src={Holberton} alt="holberton" className="w-full h-full" />
            </a>
          </div>
          <div className="w-[120px] h-[90px] Myshadoweffec">
            <a href="https://www.hackerrank.com/" target="blank">
              <img
                src={Hackerrank}
                alt="Hackerrank"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>

      <FooterContact />
    </div>
  );
};

export { Footer };
