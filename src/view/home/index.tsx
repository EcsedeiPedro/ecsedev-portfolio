import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export const Home = () => {
  return (
    <>
    <main className="hero-gradient">
        <Hero />
        <About />
    </main>

    <Skills />
    </>
  );
};
