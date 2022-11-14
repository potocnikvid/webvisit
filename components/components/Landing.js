import { motion } from "framer-motion";

export default function Landing() {
    return (
        <div className="mx-auto justify-center space-y-3 pt-4 text-center mt-24 mb-[7rem] md:px-6 lg:mt-[11rem] lg:mb-[14.5rem] lg:space-y-6">
            <motion.h1
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-4xl text-white lg:text-6xl select-none"
            >
                Omogočite interaktivni <br className="hidden lg:flex" />
                spletni obisk v 3D tehniki.
            </motion.h1>
            <motion.p
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="text-md text-white basiersquare-medium lg:text-xl select-none"
            >
                Interaktivni pogled s klikom miške.
            </motion.p>
            {/* <motion.a
                href="#jobs"
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 py-3 px-4 text-white pointer-events-auto select-none"
            >
                See open positions
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </motion.a> */}
            <motion.a
                href="#jobs"
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="mx-auto block py-3 absolute inset-x-0 bottom-0 px-6 text-white w-24 pointer-events-auto select-none"
            >
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12 mx-auto"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </motion.a>
        </div>
    );
}
