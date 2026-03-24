import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About.";
import { SolarHighlight } from "@/components/sections/SolarHighlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { lang, isAr } = useLanguage();

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, [lang]);

  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col relative"
      style={{ cursor: "none" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <CustomCursor />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <About />
        <SolarHighlight />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}