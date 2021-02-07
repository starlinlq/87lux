import Head from "next/head";
import { Layout, Header, Themes } from "../components";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Themes />
      </Layout>
    </>
  );
}
