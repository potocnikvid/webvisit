import Nav from "../../components/Nav";
import About from "../../components/About";
import Footer from "../../components/Footer";
import References from "../../components/References";
import Gallery from "../../components/Gallery";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Photography() {
  return (
    <>
      <Head>
        <title>webvisit360</title>
        <meta name="description" />
        <link rel="icon" href="/favicon/favicon-32x32.png" />
      </Head>
      <Layout classN="pt-36">
        <Gallery />
        <About />
      </Layout>
    </>
  );
}
