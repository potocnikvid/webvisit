import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Perks() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.4,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="mx-auto mt-[8rem] mb-[8rem] max-w-7xl lg:mb-[15rem] lg:mt-[15rem]">
      <div>
        <h2
          className="text-3xl lg:text-5xl"
        >
          Perks & benifits
        </h2>
      </div>
      <div
        className="mt-12 grid grid-cols-1 justify-start gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Unlimited Holiday</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Competitive Salary</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Stock Options</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>In-house Bar</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Growth</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Private Healthcare</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Work from Home</h2>
        </div>
        <div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>Retirement</h2>
        </div>
      </div>
    </div>
  );
}
