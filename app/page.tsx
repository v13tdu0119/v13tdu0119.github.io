import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SocialConnect } from "@/components/sections/social-connect";
import { SplashGate } from "@/components/splash/splash-gate";

export const dynamic = "force-static";

export default function Home() {
  return (
    <SplashGate>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <SocialConnect />
      </main>
      <Footer />
    </SplashGate>
  );
}
