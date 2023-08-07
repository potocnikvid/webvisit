import Nav from "./Nav";
import Landing from "./Landing";
import About from "./About";
import Footer from "./Footer";
import References from "./References";
import Video from "./Video";

export default function Layout({children, classN}) {
  return (
    <>
      <Nav />
      <main className={"h-full w-full scrollbar bg-black scrollbar-thumb-gray-900 scrollbar-track-gray-100 " + classN} >
        {children}
      </main>
      <Footer />
    </>
  );
}
