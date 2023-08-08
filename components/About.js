import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.4, duration: 0.6, ease: easing },
    },
    hidden: { opacity: 0, transition: { duration: 0.6, ease: easing } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="mx-auto bg-black px-16 pt-[8rem] pb-[8rem] flex max-w-7xl lg:pb-[15rem] lg:pt-[15rem]">
      <motion.p
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
        className="w-[70rem] text-white text-2xl lg:text-5xl"
      >
        We are a multinational agency specialising in web design, web
        development and brand identity. We provide an exceptional experience for
        every website we make.
      </motion.p>
    </div>
  );
}
