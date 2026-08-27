import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Summary />
        {/* <Experience /> */}
        <Projects />
        <Expertise />
        {/* <Organizations /> */}
        <Education />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
