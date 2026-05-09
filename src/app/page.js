import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getAccessToken } from "../lib/spotify";
// import {searchArtists} from "../lib/spotify";

export default async function Home() {
  const token = await getAccessToken();

  console.log(token);

  // const data = await searchArtists("NIKI");

  // const artist = data.artists.items[0];

  // console.log(artist);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Music />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
