import React, { useEffect } from "react";
import Landing from "./Landing";
import Nav from "../Nav";
import SideOver from "./SideOver";
import Dropdown from "./Dropdown";
// import Drop from "./drop";
// import Nav from "./Nav";
export default function Video() {
    return (
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div className="absolute text-[#fefefe] top-0 z-40 w-full pointer-events-none">
                <Nav />
            </div>
            <div className="relative z-30 p-5 w-full sm:w-4/5 lg:w-2/3 pointer-events-none">
                <Landing />
            </div>
            {/* <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                        // src="public/OutletLeziscMB5.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video> */}
            {/* <iframe
                className="ku-embed absolute z-10 w-auto min-w-full min-h-full max-w-none"
                frameBorder="0"
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
                scrolling="no"
                src="https://kuula.co/share/collection/79Z2b?logo=-1&info=0&fs=0&vr=1&sd=1&gyro=0&autorotate=0.67&autop=5&autopalt=1&thumbs=3&alpha=0.60&inst=0&keys=0"
            ></iframe> */}
            {/* <iframe
                className="ku-embed absolute z-10 w-auto min-w-full min-h-full max-w-none"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                src="https://kuula.co/share/collection/79MSp?logo=-1&info=0&fs=0&vr=0&sd=1&gyro=0&autopalt=1&thumbs=3&inst=0&keys=0"
            ></iframe> */}
            <iframe
                className="ku-embed absolute z-10 w-auto min-w-full min-h-full max-w-none"
                src="https://www.google.com/maps/embed?pb=!4v1669493840616!6m8!1m7!1sCAoSLEFGMVFpcFBjLU1pTU9IQi1BM3J5RHkxQUQxVnBYbmtMRTEyd3ZLLV9QNUN3!2m2!1d46.07527017919635!2d14.48439221530951!3f55.82!4f1.8299999999999983!5f0.7820865974627469"
                // width="800"
                // height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
