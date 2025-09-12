import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { scrollToSection } from "../../utils/scrollUtils";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  return (
    <footer className="flex  justify-between lg:gap-5 md:gap-8 lg:p-20 md:p-15 p-8 gap-10 md:flex-row flex-col-reverse mt-15">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span
            onClick={() => scrollToSection("home")}
            className="text-[#FFF] font-[Cormorant-Bold] cursor-pointer tracking-wider lg:text-4xl md:text-3xl text-2xl"
          >
            MNTN
          </span>
          <p className="text-[#FFF] font-medium text-sm">
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>
        <span className="text-sm opacity-50 text-[#FFF]">
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </span>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="text-[#fbd784] text-xl font-medium">More on The Blog</li>
        <li
          className="text-[#FFF] text-sm cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About MNTN
        </li>
        <li
          className="text-[#FFF] text-sm cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Contact Us
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
