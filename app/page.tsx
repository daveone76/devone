import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Projects } from "./components/sections/Projects";
import { Benefits } from "./components/sections/Benefits";
import { Testimonials } from "./components/sections/Testimonials";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

export default function Page() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

