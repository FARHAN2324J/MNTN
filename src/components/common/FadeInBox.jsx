import gsap from "gsap";
import { useEffect, useRef } from "react";

const FadeInBox = ({
  children,
  from = { clipPath: "inset(0% 150% 0% 0%)" },
  to = { clipPath: "inset(0% 0% 0% 0%)" },
  triggerOptions = {},
}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;

    gsap.fromTo(element, from, {
      ...to,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...triggerOptions,
      },
    });
  }, [from, to, triggerOptions]);

  return (
    <div ref={boxRef} style={{ clipPath: "inset(0% 0% 0% 0%)" }}>
      {children}
    </div>
  );
};

export default FadeInBox;
