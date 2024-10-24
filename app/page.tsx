import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider";
import Image from "next/image";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
    </main>
  );
}
