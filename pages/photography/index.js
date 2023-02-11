import Nav from "../../components/Nav";
import About from "../../components/About";
import Footer from "../../components/Footer";
import References from "../../components/References";
import Gallery from "../../components/Gallery";

export default function Photography() {
    return (
        <>
            <main className="h-full w-full scrollbar bg-white scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Nav />
                <Gallery />
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
