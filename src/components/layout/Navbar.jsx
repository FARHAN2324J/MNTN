import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { RiAccountCircle2Line } from "react-icons/ri";
import FadeInBox from "../common/FadeInBox";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { scrollToSection } from "../../utils/scrollUtils";

const Navbar = () => {
  return (
    <>
      <NavMd />
      <NavSm />
    </>
  );
};

export default Navbar;

const NavMd = () => {
  return (
    <div className="md:block hidden fixed w-full z-[9999]">
      <nav className="flex items-center justify-between bg-gradient-to-t from-[#0b1d2600] to-[#0b1d26be] lg:px-15 lg:py-10 md:px-10 md:py-10 px-5 py-5 z-[9999] relative">
        <FadeInBox>
          <h2 className="text-[#FFF] font-[Cormorant-Bold] tracking-wider lg:text-4xl md:text-3xl text-2xl">
            MNTN
          </h2>
        </FadeInBox>
        <ul className="flex items-center lg:gap-8 md:gap-6 gap-4">
          <li className="font-sans text-[#FFF] font-bold md:text-md">
            <span>Equiqment</span>
          </li>
          <li className="font-sans cursor-pointer text-[#FFF] font-bold md:text-md">
            <span onClick={() => scrollToSection("about-us")}>About us</span>
          </li>
          <li className="font-sans text-[#FFF] font-bold md:text-md">
            <span>Blog</span>
          </li>
        </ul>
        <div className="flex items-center gap-2 cursor-pointer">
          <RiAccountCircle2Line size={24} color="white" />
          <a href="" className="font-sans text-[#FFF] font-bold">
            Account
          </a>
        </div>
      </nav>
    </div>
  );
};

const NavSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    timeline.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power2.inOut",
      })
      .fromTo(
        menuRef.current.querySelectorAll("li"),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        menuRef.current.querySelector(".social-container"),
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      );
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      timeline.current.reverse().then(() => {
        gsap.set(menuRef.current, { display: "none" });
      });
    } else {
      gsap.set(menuRef.current, { display: "block" });
      timeline.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[9999] fixed w-full">
      <div className="fixed top-0 w-full md:hidden block">
        <button
          onClick={toggleMenu}
          className="bg-[#051015af] mx-2 my-2 text-[#ffffffd8] font-medium text-xl p-1.5 rounded-lg font-[Cormorant-Regula] transition-all duration-300 hover:bg-[#051015] hover:scale-105"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
        <nav
          ref={menuRef}
          style={{ display: "none", clipPath: "inset(0% 100% 0% 0%)" }}
          className="bg-[#061116e6] backdrop-blur-md p-8"
        >
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              <li className="font-sans text-[#ffffffd8] text-2xl transition-all duration-300 hover:translate-x-3">
                <span>Equipment</span>
              </li>
              <li className="font-sans text-[#ffffffd8] text-2xl transition-all duration-300 hover:translate-x-3">
                <span onClick={() => scrollToSection("about-us")}>About us</span>
              </li>
              <li className="font-sans text-[#ffffffd8] text-2xl transition-all duration-300 hover:translate-x-3">
                <span>Blog</span>
              </li>
            </ul>
            <div className="social-container">
              <div className="flex gap-5 items-center">
                <span className="text-[#ffffffd8] text-2xl">Follow us</span>
                <BsInstagram
                  color="white"
                  size={30}
                  className="transition-all duration-300 hover:scale-125 cursor-pointer"
                />
                <BsTwitter
                  color="white"
                  size={30}
                  className="transition-all duration-300 hover:scale-125 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="fixed top-0 right-0 m-3 md:hidden block">
        <h2 className="z-[9999] text-[#FFF] font-[Cormorant-Bold] tracking-wider lg:text-4xl md:text-3xl text-2xl">
          MNTN
        </h2>
      </div>
    </div>
  );
};
