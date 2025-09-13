import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: section,
      },
      ease: "ease",
    });
  }
};
