import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Resources from "../components/Resources";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home({ notesMarkdown }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Resources markdown={notesMarkdown} />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/interview-notes.md");
  const notesMarkdown = fs.readFileSync(filePath, "utf8");

  return {
    props: { notesMarkdown },
  };
}
