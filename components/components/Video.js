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
            <iframe
                className="ku-embed absolute z-10 w-auto min-w-full min-h-full max-w-none"
                frameBorder="0"
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
                scrolling="no"
                src="https://kuula.co/share/collection/79Z2b?logo=-1&info=0&fs=0&vr=1&sd=1&gyro=0&autorotate=0.67&autop=5&autopalt=1&thumbs=4&alpha=0.60&inst=0&keys=0"
            ></iframe>
        </div>
    );
}
