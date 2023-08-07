import React, { useEffect } from "react";
import Landing from "./Landing";


export default function Video() {
    return (
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <Landing />
            <iframe
                className="ku-embed absolute z-10 w-auto min-w-full min-h-full max-w-none"
                src="https://www.google.com/maps/embed?pb=!4v1669493840616!6m8!1m7!1sCAoSLEFGMVFpcFBjLU1pTU9IQi1BM3J5RHkxQUQxVnBYbmtMRTEyd3ZLLV9QNUN3!2m2!1d46.07527017919635!2d14.48439221530951!3f55.82!4f1.8299999999999983!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
