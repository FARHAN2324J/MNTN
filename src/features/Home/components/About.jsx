import Img1 from "../../../assets/images/01.webp";
import Img2 from "../../../assets/images/02.webp";
import Img3 from "../../../assets/images/03.webp";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ images = [Img1, Img2, Img3] }) => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const panelsRef = useRef([]);
  const contentsRef = useRef([]);
  const imagesRef = useRef([]);

  const panels = [
    {
      number: "01",
      subtitle: "GET STARTED",
      title: "What level of hiker are you?",
      content:
        "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      image: images[0],
      layout: "reverse",
    },
    {
      number: "02",
      subtitle: "HIKING ESSENTIALS",
      title: "Picking the right Hiking Gear!",
      content:
        "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      image: images[1],
      layout: "normal",
    },
    {
      number: "03",
      subtitle: "WHERE YOU GO IS THE KEY",
      title: "Understand Your Map & Timing",
      content:
        "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..",
      image: images[2],
      layout: "reverse",
    },
  ];

  const setupAnimation = useCallback(() => {
    if (!panelsRef.current.length) return;

    const panelWidth = window.innerWidth;

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    const animation = gsap.to(galleryRef.current, {
      x: () => -(panelWidth * (panelsRef.current.length - 1)),
      ease: "ease",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 3,
        end: () => `+=${panelWidth * (panelsRef.current.length - 1)}`,
        markers: false,
        anticipatePin: 1,
      },
    });

    panelsRef.current.forEach((panel, index) => {
      const content = contentsRef.current[index];
      const image = imagesRef.current[index];

      if (content && image) {
        gsap.fromTo(
          content,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 5,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 30%",
              scrub: 2,
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          image,
          {
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 30%",
              scrub: 2,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    gsap.set(panelsRef.current, {
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    });

    return animation;
  }, []);

  useEffect(() => {
    let ctx;
    let animation;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        animation = setupAnimation();
      }, containerRef);
    };

    const timeoutId = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animation) {
        animation.scrollTrigger?.kill();
        animation.kill();
      }
      ctx?.revert();
    };
  }, [setupAnimation]);

  const Panel = ({ panel, index }) => {
    const isReverse = panel.layout === "reverse";
    const articleClass = `flex md:flex-row flex-col${
      isReverse ? "-reverse" : ""
    } px-10 md:px-0 m-auto items-center ${
      isReverse ? "md:gap-5 gap-15" : "lg:gap-25 md:gap-20 gap-15"
    } xl:w-[60%] lg:w-[75%] md:w-[80%]`;

    return (
      <div id="about-us">
        <div
          ref={(el) => (panelsRef.current[index] = el)}
          className="panel"
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          <article className={articleClass}>
            {isReverse ? (
              <>
                <PanelContent panel={panel} index={index} />
                <PanelImage panel={panel} index={index} />
              </>
            ) : (
              <>
                <PanelImage panel={panel} index={index} />
                <PanelContent panel={panel} index={index} />
              </>
            )}
          </article>
        </div>
      </div>
    );
  };

  const PanelContent = ({ panel, index }) => (
    <div
      ref={(el) => (contentsRef.current[index] = el)}
      className="flex flex-col gap-5 relative"
    >
      <span className="absolute lg:-top-15 lg:-left-20 md:-top-15 md:-left-10 -top-10 -left-5 text-[65px] lg:text-9xl md:text-[85px] font-black text-[#FFF] opacity-10">
        {panel.number}
      </span>
      <div className="flex items-center gap-5">
        <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
        <span className="tracking-[0.3em] font-medium lg:text-sm text-[10px] text-[#FBD784]">
          {panel.subtitle}
        </span>
      </div>
      <h2 className="lg:text-5xl md:text-3xl text-4xl font-[Cormorant-Bold] text-[#FFF]">
        {panel.title}
      </h2>
      <p className="text-[#FFF] font-medium text-[11px] leading-[20px]">
        {panel.content}
      </p>
      <button className="flex items-center gap-2 cta">
        <span>read more</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );

  const PanelImage = ({ panel, index }) => (
    <img
      ref={(el) => (imagesRef.current[index] = el)}
      src={panel.image}
      className="lg:w-[450px] xl:w-[550px] xl:h-[550px] md:w-[300px] lg:h-[450px] md:h-[300px] w-[250px] h-[250px] object-cover"
      alt={panel.title}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={galleryRef}
        style={{
          display: "flex",
          height: "100%",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {panels.map((panel, index) => (
          <Panel key={index} panel={panel} index={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
