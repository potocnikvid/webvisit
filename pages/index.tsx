import Head from "next/head";
import Video from "../components/Landing";
import References from "../components/References";
import About from "../components/About";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>webvisit360</title>
      </Head>
      <Layout classN="">
        <Video />
        <References />
        <About />
      </Layout>
    </>
  );
}
