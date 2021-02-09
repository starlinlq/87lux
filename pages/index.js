import Head from "next/head";
import {
  Layout,
  Header,
  Themes,
  MeetTeam,
  Footer,
  Custom,
} from "../components";
export default function Home() {
  return (
    <>
      <Head>
        <title>87LUX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Themes />
        <MeetTeam />
        <Custom />
      </Layout>
      <Footer />
    </>
  );
}
