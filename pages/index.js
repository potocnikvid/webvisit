import Head from "next/head";
import Layout from "../components/Layout";
import Video from "../components/Video";
import References from "../components/References";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>webvisit360</title>
        <meta name="description" />
        <link rel="icon" href="/favicon/favicon-32x32.png" />
      </Head>
      <Layout>
        <Video />
        <References />
        <About />
      </Layout>
    </>
  );
}
