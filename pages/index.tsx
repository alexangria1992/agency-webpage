import Head from "next/head";
import Masthead from "@/components/Masthead";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Margelo — Mobile-first recreation</title>
        <meta name="description" content="A learning recreation of the archived Margelo website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="relative isolate">
        <Masthead />
        <AboutUs />
      </main>
    </>
  );
}
