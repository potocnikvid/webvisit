import Nav from "./Nav";
import Landing from "./Landing";
import Brands from "./components/Brands";
import About from "./About";
import Team from "./components/Team";
import Perks from "./components/Perks";
import Openings from "./components/Openings";
import Footer from "./Footer";
import References from "./References";
import Video from "./Video";

export default function Layout() {
    return (
        <>
            <main className="h-full w-full scrollbar bg-black scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Video />
                <References />
                {/* <Team /> */}
                {/* <Brands /> */}
                {/* <Perks /> */}
                {/* <Openings /> */}
                <About />
            </main>
            <Footer />
        </>
    );
}
