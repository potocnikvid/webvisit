/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function References() {
    return (
        <div id="references" className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl lg:text-5xl">References</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center">
                    <img src="/svgs/google.svg" />
                    <p className="text-xl mt-4">Google</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/svgs/google.svg" />
                    <p className="text-xl mt-4">Google</p>
                </div>
            </div>

            {/* <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="flex flex-col space-y-8 lg:space-y-0 lg:space-x-12 lg:flex-row">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-4">
                            <img src="/svgs/google.svg" />
                            <div className="flex flex-col">
                                <h3 className="text-xl">Google</h3>
                                <p className="text-sm">Google</p>
                            </div>
                        </div>
                        <p className="text-sm">
                            "NINE4 is a great partner for us. They are very professional and always deliver on time."
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-4">
                            <img src="/svgs/google.svg" />
                            <div className="flex flex-col">
                                <h3 className="text-xl">Google</h3>
                                <p className="text-sm">Google</p>
                            </div>
                        </div>
                        <p className="text-sm">
                            "NINE4 is a great partner for us. They are very professional and always deliver on time."
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1668264827027!6m8!1m7!1sCAoSLEFGMVFpcE96ZDlQM3NYRWZXNFFDSW5MWTlDNlhTcWZxeXNjOGQ4N0N2SFgy!2m2!1d46.06414704776849!2d14.52734925246398!3f335.17!4f-0.35999999999999943!5f0.9034407049239876"
                        width="400"
                        height="250"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                    <h2 className="mt-4 text-lg">Cubo</h2>
                </div> */}
        </div>
    );
}
