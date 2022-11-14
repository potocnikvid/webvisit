/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Dropdown from "./components/Dropdown";

export default function Nav() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <motion.nav
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mx-auto flex max-w-7xl flex-col overflow-auto py-6 px-3 lg:flex-row lg:items-center lg:justify-between"
        >
            <div className="flex flex-row items-center justify-between">
                <a href="/" className="text-3xl">
                    <Image
                        class="-rotate-90 pointer-events-auto"
                        src="/logo.png"
                        alt="webvisit360"
                        width={100}
                        height={100}
                    />
                </a>
                <Dropdown />
                {/* <button
                    className="cursor-pointer px-3 leading-none outline-none focus:outline-none lg:hidden pointer-events-auto"
                    type="button"
                    aria-label="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button> */}
            </div>
            <div className={"lg:flex" + (navbarOpen ? " flex" : " hidden")}>
                <div className="flex-col text-lg space-x-16 lg:flex-grow pointer-events-auto">
                    <a href="/">Domov</a>
                    <a href="/streetview">Google Street View</a>
                    <a href="/photography">Fotografija</a>
                    <a href="/video">Video</a>
                    <a href="/about">O nas</a>
                    <a href="/contact">Kontakt</a>
                    {/* <a
                        href="/"
                        className="rounded-full bg-[#332854] py-2.5 px-8 text-white decoration-2 underline-offset-2"
                    >
                        Login
                    </a> */}
                </div>
            </div>
        </motion.nav>
    );
}
