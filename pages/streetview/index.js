import Nav from "../../components/Nav";
import About from "../../components/About";
import Footer from "../../components/Footer";
import References from "../../components/References";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Streetview() {
  return (
    <>
      <Head>
        <title>webvisit360</title>
        <meta name="description" />
        <link rel="icon" href="/favicon/favicon-32x32.png" />
      </Head>
      <Layout classN="pt-36">
        <References />
        <About />
      </Layout>
    </>
  );
}
