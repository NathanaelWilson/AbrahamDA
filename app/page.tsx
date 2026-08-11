import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioPreview from "@/components/PortfolioPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <PortfolioPreview />
      <Contact />
    </main>
  );
}
