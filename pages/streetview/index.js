import Nav from "../../components/Nav";
import About from "../../components/About";
import Footer from "../../components/Footer";
import References from "../../components/References";

export default function Streetview() {
    return (
        <>
            <main className="h-full w-full scrollbar bg-black scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Nav />
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
