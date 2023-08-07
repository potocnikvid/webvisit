import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ImageComponent({src, width, height, className, alt}) {
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
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={fadeIn}
  >
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </motion.div>

  );
}
