import { BsArrowDown, BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Img1 from "../../../assets/images/HG.webp";
import Img2 from "../../../assets/images/MG.webp";
import Img3 from "../../../assets/images/VG.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../../components/layout/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import FadeInBox from "../../../components/common/FadeInBox";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const containerRef = useRef(null);
  const showImg = useRef(null);
  const showImg2 = useRef(null);
  const showImg3 = useRef(null);
  const titleS = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.offsetHeight * 5}`,
          scrub: 3.5,
          pin: true,
        },
      });

      const totalDuration = 3 + 0.5 + 1 + 0.5 + 1;

      tl.to(
        fillRef.current,
        {
          height: "100%",
          duration: totalDuration,
          ease: "power2.out",
        },
        "<"
      )

        .fromTo(
          showImg.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "<"
        )

        .fromTo(
          showImg2.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 },
          ">1"
        )

        .fromTo(
          showImg3.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "<2"
        )

        .fromTo(
          titleS.current,
          {
            clipPath: "inset(0% 150% 0% 0%)",
            filter: "blur(2px)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            filter: "blur(0px)",
            duration: 1,
          },
          ">0.5"
        )
        .fromTo(
          bg.current,
          {
            clipPath: "circle(150% at 50% 50%)",
          },
          {
            clipPath: "circle(10% at 50% 50%)",
            duration: 5,
            ease: "slow(1, 1, false)",
          }
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <header ref={bg} id="home">
      <div ref={sectionRef}>
        <div className="flex justify-between items-center w-full px-5 lg:py-25 md:py-25 py-15 z-5 relative">
          <div className="md:block hidden">
            <div className="flex flex-col gap-5 items-center w-fit">
              <span className="text-[#FFF] my-5 md:text-md text-sm font-medium rotate-90">
                <FadeInBox
                  from={{ clipPath: "inset(0% 150% 0% 0%)" }}
                  to={{ clipPath: "inset(0% 0% 0% 0%)", duration: 1 }}
                >
                  Follow us
                </FadeInBox>
              </span>
              <FadeInBox from={{ opacity: 0 }} to={{ opacity: 1, duration: 3 }}>
                <BsInstagram color="white" />
              </FadeInBox>
              <FadeInBox from={{ opacity: 0 }} to={{ opacity: 1, duration: 3 }}>
                <BsTwitter color="white" />
              </FadeInBox>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <FadeInBox
              from={{ clipPath: "inset(0% 150% 0% 0%)" }}
              to={{ clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
                  <span className="tracking-[0.3em] font-medium md:text-sm text-[10px]  text-[#FBD784]">
                    A HIKING GUIDE
                  </span>
                </div>
                <h1 className="font-[Cormorant-Bold] leading-none xl:text-[88px]  lg:text-[65px] md:text-[50px] text-[25px] text-[#FFF] xl:w-[950px] lg:w-[650px] md:w-[500px]">
                  Be Prepared For The Mountains And Beyond!
                </h1>
              </div>
            </FadeInBox>
            <div className="flex items-center gap-2">
              <span className="text-[#FFF] md:text-sm text-[12px]">
                scroll down
              </span>
              <BsArrowDown color="#FFF" />
            </div>
          </div>
          <FadeInBox from={{ opacity: 0 }} to={{ opacity: 1, duration: 3 }}>
            <div className="flex items-stretch gap-5">
              <div className="flex flex-col items-end gap-6">
                <span className="text-sm text-[#FFF] font-medium md:text-sm text-[12px]">
                  Start
                </span>
                <span className="text-sm text-[#FFF] font-medium md:text-sm text-[12px]">
                  01
                </span>
                <span className="text-sm text-[#FFF] font-medium md:text-sm text-[12px]">
                  02
                </span>
                <span className="text-sm text-[#FFF] font-medium md:text-sm text-[12px]">
                  03
                </span>
              </div>
              <div style={{ height: "auto" }}>
                <div
                  ref={lineRef}
                  className="w-[2px] bg-[#8C8C8C] rounded-4xl h-full relative"
                >
                  <div
                    ref={fillRef}
                    className="bg-[#FFF] rounded-4xl h-0 w-full absolute top-0 left-0"
                  />
                </div>
              </div>
            </div>
          </FadeInBox>
        </div>
        <img
          src={Img1}
          ref={showImg}
          loading="lazy"
          alt=""
          className="absolute xl:top-[-10%] lg:top-[-0%] md:top-[0%] top-[0%] brightness-50 -z-3 w-full object-cover"
        />
        <img
          src={Img2}
          ref={showImg2}
          loading="lazy"
          alt=""
          className=" absolute xl:top-[30%] lg:top-[45%] md:top-[50%] top-[35%] brightness-50 -z-2 w-full object-cover"
        />
        <img
          src={Img3}
          ref={showImg3}
          loading="lazy"
          alt=""
          id="about"
          className=" absolute xl:top-[90%]  lg:top-[85%] md:top-[90%] top-[80%] brightness-50 -z-1 w-full object-cover"
        />
      </div>
    </header>
  );
};

export default Hero;
