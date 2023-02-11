/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import ImageResponsive from "./ImageResponsive";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Gallery() {
    return (
        <div className="gap-6 m-6 columns-1 md:columns-2 lg:columns-3 2xl:columns-4">
            <ImageResponsive
                src="https://drive.google.com/file/d/1-unX8WSmjjl8lYYTnXtw80UtK50plLG-/view?usp=share_link"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />{" "}
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />{" "}
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
            <ImageResponsive
                src="/images/Screenshot 2022-11-26 at 23.51.22.png"
                alt="webvisit360"
                width={1000}
                height={1000}
            />
        </div>
        // <div className="flex flex-wrap m-4">
        //     <div className="flex-1 max-w-full md:flex-0.5 md:max-w-1/2 xl:flex-0.25 xl:max-w-1/4 p-2">
        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.19.57.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.51.22.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.48.03.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.51.22.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />
        //     </div>
        //     <div className="flex-1 max-w-full md:flex-0.5 md:max-w-1/2 xl:flex-0.25 xl:max-w-1/4 p-2">
        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.48.03.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Fanuc1.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.48.03.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />
        //     </div>
        //     <div className="flex-1 max-w-full md:flex-0.5 md:max-w-1/2 xl:flex-0.25 xl:max-w-1/4 p-2">
        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.56.01.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.25.31.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.56.01.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Fanuc1.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />
        //     </div>
        //     <div className="flex-1 max-w-full md:flex-0.5 md:max-w-1/2 xl:flex-0.25 xl:max-w-1/4 p-2">
        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Fanuc1.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.25.31.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Screenshot 2022-11-26 at 23.56.01.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />

        //         <Image
        //             className="m-2 mt-4 align-middle w-full"
        //             src="/images/Fanuc1.png"
        //             alt=""
        //             width={1000}
        //             height={1000}
        //         />
        //     </div>
        // </div>
    );
}
