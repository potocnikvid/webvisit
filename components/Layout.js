import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Brands from "./components/Brands";
import About from "./components/About";
import Team from "./components/Team";
import Perks from "./components/Perks";
import Openings from "./components/Openings";
import Footer from "./components/Footer";
import References from "./components/References";
import Video from "./components/Video";

export default function Layout() {
    return (
        <>
            <main class="h-full w-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Video />
                <References />
                {/* <Team /> */}
                <Brands />
                <Perks />
                <Openings />
                <About />
            </main>
            <Footer />
        </>
    );
}
