/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect } from "react";

export default function Openings() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
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
    <div className="mx-auto mb-[10rem] max-w-7xl" id="jobs">
      <h2
        className="text-3xl lg:text-5xl"
      >
        Current Openings
      </h2>
      <div
        className="mt-12 flex flex-col space-y-6"
      >
        <a
          variants={item}
          href="/"
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Junior Frontend Developer
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              United Kingdom, Remote
            </span>
          </div>
          <div>
            <span href="/" className="text-md lg:text-lg">
              £30k
            </span>
          </div>
        </a>
        <a
          variants={item}
          href="/"
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Software Engineer, Web
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              United Kingdom, Remote
            </span>
          </div>
          <div>
            <span href="/" className="text-md lg:text-lg">
              £45k
            </span>
          </div>
        </a>
        <a
          variants={item}
          href="/"
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Software Engineer, Mobile
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              United Kingdom, Remote
            </span>
          </div>
          <div>
            <span href="/" className="text-md lg:text-lg">
              £45k
            </span>
          </div>
        </a>
        <a
          variants={item}
          href="/"
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Senior Software Engineer, Security
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              United Kingdom, Remote
            </span>
          </div>
          <div>
            <span href="/" className="text-md lg:text-lg">
              £85k+
            </span>
          </div>
        </a>
        <a
          variants={item}
          href="/"
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Senior Software Engineer, Web
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              United Kingdom, Remote
            </span>
          </div>
          <div>
            <span href="/" className="text-md lg:text-lg">
              £85k+
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
