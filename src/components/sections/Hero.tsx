import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  fr: {
    h1a: "L'Énergie",
    h1b: "qui Illumine",
    h1c: "votre Monde",
    sub: "Installation électrique • Bâtiment • Plomberie • Panneaux Solaires",
    subHighlight: "Expertise au Maroc",
    cta1: "Découvrir nos services",
    cta2: "Obtenir un Devis",
    line: "Votre partenaire de confiance pour l'électricité, la plomberie et l'énergie solaire.",
  },
  ar: {
    h1a: "الطاقة",
    h1b: "التي تُضيء",
    h1c: "عالمك",
    sub: "تركيب كهربائي • بناء • سباكة • ألواح شمسية",
    subHighlight: "خبرة في المغرب",
    cta1: "اكتشف خدماتنا",
    cta2: "تقدير مجاني",
    line: "شريككم الموثوق في الكهرباء والسباكة والطاقة الشمسية.",
  },
};

export function Hero() {
  const { lang, isAr } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="home"
      dir={isAr ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "640px", background: "#060d12" }}
    >
      <div
        className="absolute z-0"
        style={{ left: isAr ? "-30%" : "28%", right: isAr ? "28%" : "-30%", top: 0, bottom: 0 }}
      >
        <iframe
          src="https://my.spline.design/retrofuturisticcircuitloop-P6AlXkESCLq6lKWtrmqghmAK/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block", pointerEvents: "none" }}
          title="Spline scene"
          loading="lazy"
          allow="autoplay"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isAr
            ? "linear-gradient(to left, rgba(6,13,18,1) 0%, rgba(6,13,18,0.9) 28%, rgba(6,13,18,0.35) 55%, transparent 80%)"
            : "linear-gradient(to right, rgba(6,13,18,1) 0%, rgba(6,13,18,0.9) 28%, rgba(6,13,18,0.35) 55%, transparent 80%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to top, #060d12 0%, transparent 100%)" }}
      />

      <div className="relative z-10 w-full h-full flex items-center" style={{ paddingTop: "72px" }}>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div
            className={`flex flex-col ${isAr ? "items-end text-right ml-auto" : "items-start"}`}
            style={{ maxWidth: "800px" }}
          >
            <h1
              className="font-black mb-7"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3.2rem, 7.5vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="block text-white"
              >
                {t.h1a}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
                className="block"
                style={{
                  backgroundImage: "linear-gradient(90deg, #38bdf8 0%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.h1b}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.34 }}
                className="block text-white"
              >
                {t.h1c}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mb-5 leading-relaxed"
              style={{
                fontSize: "0.92rem",
                color: "rgba(255,255,255,0.45)",
                fontWeight: 400,
                maxWidth: "400px",
              }}
            >
              {t.line}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-1"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}
            >
              {t.sub}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
              style={{ fontSize: "0.8rem", fontWeight: 700, color: "#38bdf8" }}
            >
              {t.subHighlight}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`flex flex-wrap gap-3 mb-10 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <a
                href="/services"
                className={`group relative flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white overflow-hidden transition-transform hover:scale-[1.03] ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  fontSize: "0.875rem",
                  background: "linear-gradient(135deg, #1e72b8, #0ea5e9)",
                  boxShadow: "0 0 28px rgba(30,114,184,0.5)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #1e72b8)" }}
                />
                <span className="relative z-10">{t.cta1}</span>
                <ArrowRight
                  className={`relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isAr ? "rotate-180" : ""}`}
                />
              </a>

              <a
                href="/contact"
                className="flex items-center px-6 py-3 rounded-full font-bold text-white transition-all hover:bg-white/8"
                style={{
                  fontSize: "0.875rem",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {t.cta2}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 rounded-full mx-auto"
          style={{ background: "linear-gradient(to bottom, transparent, #38bdf8, transparent)" }}
        />
      </motion.div>
    </section>
  );
}