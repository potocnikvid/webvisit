export default function SideOver() {
    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            {/* <!--
                Background backdrop, show/hide based on slide-over state.

                Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        {/* <!--
                        Slide-over panel, show/hide based on slide-over state.

                        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                            From: "translate-x-full"
                            To: "translate-x-0"
                        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                            From: "translate-x-0"
                            To: "translate-x-full"
                        --> */}
                        <div className="pointer-events-auto relative w-screen max-w-md">
                            {/* <!--
                                Close button, show/hide based on slide-over state.

                                Entering: "ease-in-out duration-500"
                                From: "opacity-0"
                                To: "opacity-100"
                                Leaving: "ease-in-out duration-500"
                                From: "opacity-100"
                                To: "opacity-0"
                             --> */}
                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                <button
                                    type="button"
                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    <span className="sr-only">Close panel</span>
                                    {/* <!-- Heroicon name: outline/x-mark --> */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                                        Panel title
                                    </h2>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    {/* <!-- Replace with your content --> */}
                                    <div className="absolute inset-0 px-4 sm:px-6">
                                        <div
                                            className="h-full border-2 border-dashed border-gray-200"
                                            aria-hidden="true"
                                        ></div>
                                    </div>
                                    {/* <!-- /End replace --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
