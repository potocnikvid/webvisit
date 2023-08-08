/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Footer() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <motion.nav
      key="logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="mx-auto flex w-full max-w-7xl flex-col overflow-auto py-6 px-3 bg-white text-black lg:flex-row lg:items-center lg:justify-between
      "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="absolute">
          <Link href="/">
            <Image
              className="pointer-events-auto"
              src="/logo.png"
              alt="webvisit360"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <button
          className="cursor-pointer px-3 leading-none outline-none focus:outline-none lg:hidden"
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#332b54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className={"lg:flex" + (navbarOpen ? " flex" : " hidden")}>
        <div className="flex-col space-x-12 lg:flex-grow">
          <a href="/">Home</a>
          <a
            href="/"
            className="rounded-full text-white bg-[#f9b03e] py-2.5 px-8 decoration-2 underline-offset-2"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
